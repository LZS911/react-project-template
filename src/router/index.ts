export interface IMenuDataItem {
  path: string;
  name: string;
  exact: boolean;
  element: React.LazyExoticComponent<React.FC>;
}
