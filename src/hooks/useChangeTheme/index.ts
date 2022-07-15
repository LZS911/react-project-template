import { useEffect, useState } from 'react';
import CONSTANT from '../../common/constant';
import { ThemeModeEnum, ThemePrimaryEnum } from '../../common/enum';
import LocalStorageWrapper from '../../utils/LocalStorageWrapper';

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
    const colorThemeLocal = LocalStorageWrapper.get<ThemeModeEnum>(CONSTANT.THEME_MODE);
    const primaryThemeLocal = LocalStorageWrapper.getOrDefault<ThemePrimaryEnum>(
      CONSTANT.PRIMARY_MODE,
      ThemePrimaryEnum.Blue,
    );

    if (colorThemeLocal === ThemeModeEnum.Dark) {
      addClass(ThemeModeEnum.Dark);
    }

    addClass(primaryThemeLocal);
  }, []);
};

const useChangeTheme = () => {
  const colorThemeLocal: ThemeModeEnum = LocalStorageWrapper.getOrDefault<ThemeModeEnum>(
    CONSTANT.THEME_MODE,
    ThemeModeEnum.Light,
  );
  const primaryThemeLocal: ThemePrimaryEnum = LocalStorageWrapper.getOrDefault<ThemePrimaryEnum>(
    CONSTANT.PRIMARY_MODE,
    ThemePrimaryEnum.Blue,
  );
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeModeEnum>(colorThemeLocal);
  const [currentThemePrimary, setCurrentThemePrimary] =
    useState<ThemePrimaryEnum>(primaryThemeLocal);

  const _setDark = () => {
    addClass(ThemeModeEnum.Dark);
    LocalStorageWrapper.set(CONSTANT.THEME_MODE, ThemeModeEnum.Dark);
    setCurrentThemeMode(ThemeModeEnum.Dark);
  };

  const _setLight = () => {
    removeClass(ThemeModeEnum.Dark);
    LocalStorageWrapper.set(CONSTANT.THEME_MODE, ThemeModeEnum.Light);
    setCurrentThemeMode(ThemeModeEnum.Light);
  };

  const _setBlue = () => {
    addClass(ThemePrimaryEnum.Blue);
    removeClass(ThemePrimaryEnum.Green);
    removeClass(ThemePrimaryEnum.Purple);
    LocalStorageWrapper.set(CONSTANT.PRIMARY_MODE, ThemePrimaryEnum.Blue);
    setCurrentThemePrimary(ThemePrimaryEnum.Blue);
  };

  const _setGreen = () => {
    addClass(ThemePrimaryEnum.Green);
    removeClass(ThemePrimaryEnum.Blue);
    removeClass(ThemePrimaryEnum.Purple);
    LocalStorageWrapper.set(CONSTANT.PRIMARY_MODE, ThemePrimaryEnum.Green);
    setCurrentThemePrimary(ThemePrimaryEnum.Green);
  };

  const _setPurple = () => {
    addClass(ThemePrimaryEnum.Purple);
    removeClass(ThemePrimaryEnum.Blue);
    removeClass(ThemePrimaryEnum.Green);
    LocalStorageWrapper.set(CONSTANT.PRIMARY_MODE, ThemePrimaryEnum.Purple);
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
