import ThemeBase from '../../components/ThemeBase';
import ButtonDemo from '../../components/ThemeBase/Demo/Button';

const Dashboard: React.FC = () => {
  return (
    <ThemeBase.Paper className="dark:!bg-black mt-2">
      <ButtonDemo />
    </ThemeBase.Paper>
  );
};

export default Dashboard;
