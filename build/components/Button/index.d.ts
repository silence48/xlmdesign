import React from "react";
import "./styles.scss";
declare enum ButtonVariant {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}
declare enum ButtonSize {
    default = "default",
    small = "small"
}
interface ButtonComponent {
    variant: typeof ButtonVariant;
    size: typeof ButtonSize;
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    variant?: ButtonVariant;
    isLoading?: boolean;
    size?: ButtonSize;
    fullWidth?: boolean;
    children: string | React.ReactNode;
}
export declare const Button: React.FC<ButtonProps> & ButtonComponent;
export {};
//# sourceMappingURL=index.d.ts.map