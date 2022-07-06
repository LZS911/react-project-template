import React from 'react';
import { IMenuDataItem } from '.';
export const noLoginPageList: IMenuDataItem[] = [
  {
    path: '/login',
    name: 'login',
    exact: true,
    element: React.lazy(() => import('../pages/Login')),
  },
];
export const routers: IMenuDataItem[] = [];
