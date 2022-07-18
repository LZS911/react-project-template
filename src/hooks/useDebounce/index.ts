import * as React from 'react';
export default function useDebounce<T>(fn: (e: T) => void, dep: Array<unknown> = [], delay = 300) {
  const { current } = React.useRef<{
    fn: (e: T) => void;
    timer: NodeJS.Timeout | null;
  }>({
    fn,
    timer: null,
  });
  React.useEffect(() => {
    current.fn = fn;
  }, [fn, current]);
  return React.useCallback(
    (e: T) => {
      if (current.timer) {
        clearTimeout(current.timer);
      }

      current.timer = setTimeout(() => {
        current.fn(e);
      }, delay);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [current, delay, ...dep],
  );
}
