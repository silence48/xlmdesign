import React from "react";
import "./styles.scss";
declare enum StatusBarVariant {
    info = "info",
    success = "success",
    error = "error",
    warning = "warning"
}
interface StatusBarComponent {
    variant: typeof StatusBarVariant;
}
interface StatusBarProps {
    variant: StatusBarVariant;
    children: string | React.ReactNode;
}
export declare const StatusBar: React.FC<StatusBarProps> & StatusBarComponent;
export {};
//# sourceMappingURL=index.d.ts.map