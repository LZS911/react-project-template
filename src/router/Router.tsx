import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IMenuDataItem } from '.';
import HeaderProgress from '../components/HeaderProgress';
import { useInitTheme } from '../hooks/useChangeTheme';
import useUserConfig from '../hooks/useUserConfig';
import Layout from '../pages/Layout';
import { noLoginPageList, pageList } from './router.config';

const RouterComponent: React.FC = () => {
  const { isLogin, token, getUserConfig } = useUserConfig();
  useEffect(() => {
    getUserConfig();
  }, [getUserConfig]);
  useInitTheme();

  const genPage = (pages: IMenuDataItem[]) => {
    return pages.map((v) => {
      return (
        <Route
          {...v}
          key={v.name}
          element={
            <Suspense fallback={<HeaderProgress />}>
              <v.element />
            </Suspense>
          }
        />
      );
    });
  };

  return (
    <BrowserRouter>
      {(!isLogin || !token) && (
        <Suspense fallback={<HeaderProgress />}>
          <Routes>
            {genPage(noLoginPageList)}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Suspense>
      )}

      {(isLogin || token) && (
        <Suspense fallback={<HeaderProgress />}>
          <Layout>
            <Routes>
              {genPage(pageList)}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </Layout>
        </Suspense>
      )}
    </BrowserRouter>
  );
};

export default RouterComponent;
