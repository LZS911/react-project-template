import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useBoolean, useToggle } from 'ahooks';
import { forwardRef, HTMLInputTypeAttribute, useMemo } from 'react';
import { ILoginInputProps } from '.';
import usePropsValue from '../../hooks/usePropsValue';

const LoginInput: React.ForwardRefRenderFunction<HTMLDivElement, ILoginInputProps> = (
  { placeholder, prefix, value, onChange, defaultValue = '', label, type = 'text' },
  ref,
) => {
  const [internalValue, setInternalValue] = usePropsValue<string>({
    defaultValue,
    value,
    onChange,
  });
  const [isFocus, { setFalse: clearFocus, setTrue: setFocus }] = useBoolean(false);
  const [isShowPassword, { toggle: switchPasswordVisibility }] = useToggle(false);
  const internalType = useMemo((): HTMLInputTypeAttribute => {
    if (type !== 'password') {
      return type;
    }

    return isShowPassword ? 'text' : 'password';
  }, [isShowPassword, type]);
  return (
    <>
      <div ref={ref} className="mb-1 text-xs">
        {label}
      </div>
      <div
        className={`flex items-center border-b-2 pb-2 w-full pl-2 ${
          isFocus ? 'border-sky-300' : ''
        } transition-colors`}
      >
        {prefix}
        <input
          type={internalType}
          className="ml-3 outline-0 w-4/5 p-2 h-full"
          value={internalValue}
          onChange={(e) => {
            setInternalValue(e.target.value);
          }}
          placeholder={placeholder}
          onFocus={setFocus}
          onBlur={clearFocus}
        />
        {type === 'password' && (
          <button
            onClick={switchPasswordVisibility}
            className="hover:bg-slate-200 relative transition-colors cursor-pointer p-2 rounded-md flex justify-center items-center after:test-demo active:after:test-demo2"
          >
            {isShowPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </button>
        )}
      </div>
    </>
  );
};

export default forwardRef(LoginInput);