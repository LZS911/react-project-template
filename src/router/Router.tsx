import { Suspense, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { noLoginPageList } from './router.config';

const RouterComponent: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const noLoginPageElement = useMemo(() => {
    return noLoginPageList.map((v) => {
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
  }, []);
  return (
    <BrowserRouter>
      {!isLogin && (
        <Suspense fallback={null}>
          <Routes>
            {noLoginPageElement}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
};

export default RouterComponent;
