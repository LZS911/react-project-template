export interface INavIconList {
  name: string;
  path: string;
  icon: JSX.Element;
  onClick?: () => void;
  children?: Array<Omit<INavIconList, 'icon' | 'children'>>;
}
