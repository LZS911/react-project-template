import { ButtonProps } from 'antd';
import Button from './Button';
import Paper from './Paper';
export interface IThemeBaseProps {
  children?: React.ReactNode;
  className?: string;
}
export type IPaperProps = IThemeBaseProps;
export interface IButtonProps extends Omit<ButtonProps, 'type'> {
  type?: ButtonProps['type'] | 'secondary';
}
const ThemeBase = {
  Paper,
  Button
};
export default ThemeBase;
