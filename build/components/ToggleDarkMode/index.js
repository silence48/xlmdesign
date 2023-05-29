import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { NavButton } from "../NavButton";
import { Icon } from "../../icons";
export var ModeValue;
(function (ModeValue) {
    ModeValue["light"] = "light-mode";
    ModeValue["dark"] = "dark-mode";
})(ModeValue || (ModeValue = {}));
export var ToggleDarkMode = function (_a) {
    var storageKeyId = _a.storageKeyId, showBorder = _a.showBorder, onToggleEnd = _a.onToggleEnd;
    var prefersDarkMode;
    if (typeof window !== "undefined") {
        prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    }
    else {
        prefersDarkMode = null;
    }
    var getCurrentMode = useCallback(function () {
        var modeSaved = storageKeyId ? localStorage.getItem(storageKeyId) : null;
        if (modeSaved) {
            return modeSaved;
        }
        return prefersDarkMode && prefersDarkMode.matches ? ModeValue.dark : ModeValue.light;
    }, [storageKeyId, prefersDarkMode]);
    var _b = useState(Boolean(getCurrentMode() === ModeValue.dark)), isDarkMode = _b[0], setIsDarkMode = _b[1];
    useEffect(function () {
        var currentMode = getCurrentMode();
        var _isDarkMode = Boolean(currentMode === ModeValue.dark);
        setIsDarkMode(_isDarkMode);
    }, [getCurrentMode]);
    if (typeof window !== 'undefined') {
        useEffect(function () {
            if (isDarkMode) {
                document.body.classList.remove(ModeValue.light);
                document.body.classList.add(ModeValue.dark);
            }
            else {
                document.body.classList.remove(ModeValue.dark);
                document.body.classList.add(ModeValue.light);
            }
        }, [isDarkMode]);
    }
    ;
    var handleToggle = function () {
        var _isDarkMode = !isDarkMode;
        setIsDarkMode(_isDarkMode);
        if (storageKeyId) {
            if (_isDarkMode) {
                localStorage.setItem(storageKeyId, ModeValue.dark);
            }
            else {
                localStorage.setItem(storageKeyId, ModeValue.light);
            }
        }
        if (onToggleEnd) {
            onToggleEnd(_isDarkMode);
        }
    };
    return (_jsx(NavButton, { id: "dark-mode-toggle", title: isDarkMode ? "Activate light mode" : "Activate dark mode", onClick: handleToggle, icon: isDarkMode ? _jsx(Icon.Sun, {}) : _jsx(Icon.Moon, {}), showBorder: showBorder }));
};
ToggleDarkMode.displayName = "ToggleDarkMode";
//# sourceMappingURL=index.js.map