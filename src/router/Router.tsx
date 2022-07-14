import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IMenuDataItem } from '.';
import useUserConfig from '../hooks/useUserConfig';
import { noLoginPageList, pageList } from './router.config';

const RouterComponent: React.FC = () => {
  const { isLogin, token } = useUserConfig();
  console.log(isLogin);

  const genPage = (pages: IMenuDataItem[]) => {
    return pages.map((v) => {
      return (
        <Route
          {...v}
          key={v.name}
          element={
            <Suspense fallback={null}>
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
        <Suspense fallback={null}>
          <Routes>
            {genPage(noLoginPageList)}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Suspense>
      )}

      {(isLogin || token) && (
        <Suspense fallback={null}>
          <Routes>
            {genPage(pageList)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
};

export default RouterComponent;
