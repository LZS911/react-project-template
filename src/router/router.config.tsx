import React from 'react';
import { IMenuDataItem } from '.';
export const pageList: IMenuDataItem[] = [
  {
    path: '/dashboard',
    name: '/dashboard',
    exact: true,
    element: React.lazy(() => import('../pages/Dashboard')),
  },
];
export const noLoginPageList: IMenuDataItem[] = [
  {
    path: '/login',
    name: 'login',
    exact: true,
    element: React.lazy(() => import('../pages/Login')),
  },
];
