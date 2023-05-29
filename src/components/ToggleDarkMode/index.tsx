import { useCallback, useEffect, useState } from "react";
import { NavButton } from "../NavButton";
import { Icon } from "../../icons";

export enum ModeValue {
  light = "light-mode",
  dark = "dark-mode",
}

interface ToggleDarkModeProps {
  storageKeyId?: string;
  showBorder?: boolean;
  onToggleEnd?: (isDarkMode: boolean) => void;
}

export const ToggleDarkMode = ({
  storageKeyId,
  showBorder,
  onToggleEnd,
}: ToggleDarkModeProps) => {
  let prefersDarkMode: MediaQueryList | null;
  if (typeof window !== "undefined") {
    prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  } else { 
    prefersDarkMode = null;
  }

  const getCurrentMode = useCallback(() => {
    const modeSaved = (typeof window !== "undefined" && storageKeyId) ? window.localStorage.getItem(storageKeyId) : null;

    if (modeSaved) {
      return modeSaved;
    }

    return prefersDarkMode && prefersDarkMode.matches ? ModeValue.dark : ModeValue.light;
  }, [storageKeyId, prefersDarkMode]);

  const [isDarkMode, setIsDarkMode] = useState(
    Boolean(getCurrentMode() === ModeValue.dark),
  );

  // Set theme on page load
  useEffect(() => {
    const currentMode = getCurrentMode();
    const _isDarkMode = Boolean(currentMode === ModeValue.dark);

    setIsDarkMode(_isDarkMode);
  }, [getCurrentMode]);

  // Set body class when value changes
  if (typeof window !== 'undefined') {useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove(ModeValue.light);
      document.body.classList.add(ModeValue.dark);
    } else {
      document.body.classList.remove(ModeValue.dark);
      document.body.classList.add(ModeValue.light);
    }
  }, [isDarkMode])};

  const handleToggle = () => {
    const _isDarkMode = !isDarkMode;

    setIsDarkMode(_isDarkMode);

    if (typeof window !== "undefined" && storageKeyId) {
      if (_isDarkMode) {
        window.localStorage.setItem(storageKeyId, ModeValue.dark);
      } else {
        window.localStorage.setItem(storageKeyId, ModeValue.light);
      }
    }

    if (onToggleEnd) {
      onToggleEnd(_isDarkMode);
    }
  };

  return (
    <NavButton
      id="dark-mode-toggle"
      title={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      onClick={handleToggle}
      icon={isDarkMode ? <Icon.Sun /> : <Icon.Moon />}
      showBorder={showBorder}
    />
  );
};

ToggleDarkMode.displayName = "ToggleDarkMode";
