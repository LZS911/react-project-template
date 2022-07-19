import React from 'react';
import { IMenuDataItem } from '.';
export const pageList: IMenuDataItem[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    exact: true,
    element: React.lazy(() => import('../pages/Dashboard')),
  },
  {
    path: '/chat',
    name: 'chat',
    exact: true,
    element: React.lazy(() => import('../pages/Chat')),
  },
  {
    path: '/component/input',
    name: 'input',
    exact: true,
    element: React.lazy(() => import('../pages/Component/Input')),
  },
  {
    path: '/component/table',
    name: '/table',
    exact: true,
    element: React.lazy(() => import('../pages/Component/Table')),
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
