import React from "react";
import "./styles.scss";
declare enum InfoBlockVariant {
    info = "info",
    success = "success",
    error = "error",
    warning = "warning"
}
interface InfoBlockComponent {
    variant: typeof InfoBlockVariant;
}
interface InfoBlockProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: InfoBlockVariant;
    children: string | React.ReactNode;
}
export declare const InfoBlock: React.FC<InfoBlockProps> & InfoBlockComponent;
export {};
//# sourceMappingURL=index.d.ts.map