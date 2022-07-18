import { ButtonProps } from 'antd';
import { MouseEventHandler } from 'react';
import Button from './Button';
import Paper from './Paper';
import Icon from './Icon';
export interface IThemeBaseProps {
  children?: React.ReactNode;
  className?: string;
  hidden?: boolean;
}
export type IPaperProps = IThemeBaseProps;
export interface IIconProps extends IThemeBaseProps {
  icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}
export interface IButtonProps extends Omit<ButtonProps, 'type'> {
  type?: ButtonProps['type'] | 'secondary';
}
const ThemeBase = {
  Paper,
  Button,
  Icon,
};
export default ThemeBase;
