import { useEffect, useState } from 'react';
import CONSTANT from '../../common/constant';
import { ThemeModeEnum, ThemePrimaryEnum } from '../../common/enum';

const addClass = (className: string) => {
  if (document.documentElement.classList.contains(className)) {
    return;
  }

  document.documentElement.classList.add(className);
};

const removeClass = (className: string) => {
  if (!document.documentElement.classList.contains(className)) {
    return;
  }

  document.documentElement.classList.remove(className);
};

export const useInitTheme = () => {
  useEffect(() => {
    const colorThemeLocal = localStorage.getItem(CONSTANT.THEME_MODE);
    const primaryThemeLocal = localStorage.getItem(CONSTANT.PRIMARY_MODE);

    if (colorThemeLocal === ThemeModeEnum.Dark) {
      addClass(ThemeModeEnum.Dark);
    }

    addClass(primaryThemeLocal ?? ThemePrimaryEnum.Blue);
  }, []);
};

const useChangeTheme = () => {
  const colorThemeLocal: ThemeModeEnum = localStorage.getItem(CONSTANT.THEME_MODE) as ThemeModeEnum;
  const primaryThemeLocal: ThemePrimaryEnum = localStorage.getItem(
    CONSTANT.PRIMARY_MODE,
  ) as ThemePrimaryEnum;
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeModeEnum>(
    colorThemeLocal ?? ThemeModeEnum.Light,
  );
  const [currentThemePrimary, setCurrentThemePrimary] = useState<ThemePrimaryEnum>(
    primaryThemeLocal ?? ThemePrimaryEnum.Blue,
  );

  const _setDark = () => {
    addClass(ThemeModeEnum.Dark);
    localStorage.setItem(CONSTANT.THEME_MODE, ThemeModeEnum.Dark);
    setCurrentThemeMode(ThemeModeEnum.Dark);
  };

  const _setLight = () => {
    removeClass(ThemeModeEnum.Dark);
    localStorage.setItem(CONSTANT.THEME_MODE, ThemeModeEnum.Light);
    setCurrentThemeMode(ThemeModeEnum.Light);
  };

  const _setBlue = () => {
    addClass(ThemePrimaryEnum.Blue);
    removeClass(ThemePrimaryEnum.Green);
    removeClass(ThemePrimaryEnum.Purple);
    localStorage.setItem(CONSTANT.PRIMARY_MODE, ThemePrimaryEnum.Blue);
    setCurrentThemePrimary(ThemePrimaryEnum.Blue);
  };

  const _setGreen = () => {
    addClass(ThemePrimaryEnum.Green);
    removeClass(ThemePrimaryEnum.Blue);
    removeClass(ThemePrimaryEnum.Purple);
    localStorage.setItem(CONSTANT.PRIMARY_MODE, ThemePrimaryEnum.Green);
    setCurrentThemePrimary(ThemePrimaryEnum.Green);
  };

  const _setPurple = () => {
    addClass(ThemePrimaryEnum.Purple);
    removeClass(ThemePrimaryEnum.Blue);
    removeClass(ThemePrimaryEnum.Green);
    localStorage.setItem(CONSTANT.PRIMARY_MODE, ThemePrimaryEnum.Purple);
    setCurrentThemePrimary(ThemePrimaryEnum.Purple);
  };

  const changeThemeMode = (themeMode: ThemeModeEnum) => {
    if (themeMode === ThemeModeEnum.Dark) {
      _setDark();
    } else {
      _setLight();
    }
  };

  const changePrimary = (primaryMode: ThemePrimaryEnum) => {
    const actionMap = new Map<ThemePrimaryEnum, () => void>([
      [ThemePrimaryEnum.Blue, _setBlue],
      [ThemePrimaryEnum.Green, _setGreen],
      [ThemePrimaryEnum.Purple, _setPurple],
    ]);
    actionMap.get(primaryMode)?.();
  };

  return {
    currentThemeMode,
    currentThemePrimary,
    changeThemeMode,
    changePrimary,
  };
};

export default useChangeTheme;
