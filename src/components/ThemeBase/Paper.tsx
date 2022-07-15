import { IPaperProps } from '.';
import CONSTANT from '../../common/constant';

const Paper: React.FC<IPaperProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white ${CONSTANT.DARK_BG_COLOR} dark:text-white ${className}`}>
      {children}
    </div>
  );
};

export default Paper;
