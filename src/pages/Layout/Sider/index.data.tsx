import { CodeSandboxOutlined, DashboardOutlined, MessageOutlined } from '@ant-design/icons';
import { NavigateFunction } from 'react-router-dom';
import { INavIconList } from './index.type';
export const navIconList: (navigate: NavigateFunction) => INavIconList[] = (navigate) => {
  return [
    {
      name: 'dashboard',
      path: '/dashboard',
      onClick: () => {
        navigate('/dashboard');
      },
      icon: <DashboardOutlined />,
    },
    {
      name: 'chat',
      path: '/chat',
      onClick: () => {
        navigate('/chat');
      },
      icon: <MessageOutlined />,
    },
    {
      name: 'component',
      path: '/component',
      icon: <CodeSandboxOutlined />,
      children: [
        {
          path: '/component/input',
          name: 'input',
          onClick: () => {
            navigate('/component/input');
          },
        },
        {
          path: '/component/table',
          name: 'table',
          onClick: () => {
            navigate('/component/table');
          },
        },
      ],
    },
  ];
};
