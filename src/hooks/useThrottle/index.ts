import * as React from 'react';
export default function useThrottle<T>(
  fn: (e: T) => void,
  dep: Array<unknown> = [],
  delay = 600
) {
  const { current } = React.useRef<{
    fn: (e: T) => void;
    timer: NodeJS.Timeout | null;
  }>({
    fn,
    timer: null
  });
  React.useEffect(() => {
    current.fn = fn;
  }, [fn, current]);
  return React.useCallback((e: T) => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      current.fn(e);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep);
}
