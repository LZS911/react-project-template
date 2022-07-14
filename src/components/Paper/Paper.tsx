import { IPaperProps } from '.';

const Paper: React.FC<IPaperProps> = ({ children, className = '' }) => {
  return <div className={`rounded-md bg-white p-6 dark:bg-slate-800 ${className}`}>{children}</div>;
};

export default Paper;
