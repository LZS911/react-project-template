import ThemeBase from '../../components/ThemeBase';
import ButtonDemo from '../../components/ThemeBase/Demo/Button';

const Dashboard: React.FC = () => {
  return (
    <ThemeBase.Paper className="h-full w-full">
      <ButtonDemo />
    </ThemeBase.Paper>
  );
};

export default Dashboard;
