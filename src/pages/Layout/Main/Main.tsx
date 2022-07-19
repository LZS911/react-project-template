import React, { ReactNode } from 'react';

const Main: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <main className={`p-6 bg-slate-100 dark:!bg-black min-h-[calc(100vh-57px)]`}>{children}</main>
  );
};

export default Main;
