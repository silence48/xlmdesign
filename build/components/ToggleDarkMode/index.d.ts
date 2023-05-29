/// <reference types="react" />
export declare enum ModeValue {
    light = "light-mode",
    dark = "dark-mode"
}
interface ToggleDarkModeProps {
    storageKeyId?: string;
    showBorder?: boolean;
    onToggleEnd?: (isDarkMode: boolean) => void;
}
export declare const ToggleDarkMode: {
    ({ storageKeyId, showBorder, onToggleEnd, }: ToggleDarkModeProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map