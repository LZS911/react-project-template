import ThemeBase from '..';
import { ThemeModeEnum, ThemePrimaryEnum } from '../../../common/enum';
import useChangeTheme from '../../../hooks/useChangeTheme';
import useUserConfig from '../../../hooks/useUserConfig';

const ButtonDemo: React.FC = () => {
  const { changePrimary, changeThemeMode, currentThemeMode } = useChangeTheme();
  const { signOut } = useUserConfig();
  return (
    <div>
      <ThemeBase.Button
        type="link"
        danger
        onClick={() => {
          if (currentThemeMode === ThemeModeEnum.Dark) {
            changeThemeMode(ThemeModeEnum.Light);
          } else {
            changeThemeMode(ThemeModeEnum.Dark);
          }
        }}
      >
        changeThemeMode
      </ThemeBase.Button>
      <ThemeBase.Button type="primary" onClick={() => changePrimary(ThemePrimaryEnum.Blue)}>
        blue
      </ThemeBase.Button>
      <ThemeBase.Button type="secondary" onClick={() => changePrimary(ThemePrimaryEnum.Purple)}>
        purple
      </ThemeBase.Button>
      <ThemeBase.Button type="dashed" onClick={() => changePrimary(ThemePrimaryEnum.Purple)}>
        dashed
      </ThemeBase.Button>
      <ThemeBase.Button type="ghost" onClick={() => changePrimary(ThemePrimaryEnum.Purple)}>
        ghost
      </ThemeBase.Button>
      <ThemeBase.Button type="default" onClick={() => changePrimary(ThemePrimaryEnum.Purple)}>
        default
      </ThemeBase.Button>
      <ThemeBase.Button danger onClick={signOut}>
        danger
      </ThemeBase.Button>
      <ThemeBase.Button onClick={() => changePrimary(ThemePrimaryEnum.Green)}>
        green
      </ThemeBase.Button>
    </div>
  );
};

export default ButtonDemo;
