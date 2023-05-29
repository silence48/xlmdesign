import React from "react";
import "./styles.scss";
declare enum TextLinkVariant {
    primary = "primary",
    secondary = "secondary"
}
interface TextLinkComponent {
    variant: typeof TextLinkVariant;
}
interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    variant?: TextLinkVariant;
    disabled?: boolean;
    underline?: boolean;
    children: string | React.ReactNode;
}
export declare const TextLink: React.FC<TextLinkProps> & TextLinkComponent;
export {};
//# sourceMappingURL=index.d.ts.map