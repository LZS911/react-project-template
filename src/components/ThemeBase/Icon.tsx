import { IIconProps } from '.';

const Icon: React.FC<IIconProps> = ({ icon, onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`hover:bg-slate-200 dark:bg-black bg-white flex justify-center items-center p-2 dark:text-white dark:hover:bg-slate-400  transition-colors cursor-pointer rounded-md relative after:water-wave-hide active:after:water-wave-show ${className}`}
    >
      {icon}
    </div>
  );
};

export default Icon;
