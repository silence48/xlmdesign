import React from "react";
import "./styles.scss";
interface LayoutComponent {
    Inset: React.FC<InsetProps>;
    Content: React.FC<ContentProps>;
    Header: React.FC<HeaderProps>;
    Footer: React.FC<FooterProps>;
}
export declare const Layout: LayoutComponent;
interface InsetProps {
    children: React.ReactNode;
}
interface ContentProps {
    children: React.ReactNode;
}
interface HeaderProps {
    projectTitle: string;
    projectLink?: string;
    hasDarkModeToggle?: boolean;
    onDarkModeToggleEnd?: (isDarkMode: boolean) => void;
    onSignOut?: () => void;
    showButtonBorder?: boolean;
    menu?: {
        isEnabled: boolean;
        onOpen: () => void;
    };
    contentCenter?: React.ReactElement;
    contentRight?: React.ReactElement;
}
interface FooterProps {
    marginTop?: string;
    hideLegalLinks?: boolean;
    hideTopBorder?: boolean;
    gitHubLink?: string;
    gitHubLabel?: string;
    children?: React.ReactNode;
}
export {};
//# sourceMappingURL=index.d.ts.map