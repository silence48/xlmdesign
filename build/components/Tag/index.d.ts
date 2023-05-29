import React from "react";
import "./styles.scss";
declare enum TagVariant {
    default = "default",
    error = "error",
    success = "success",
    warning = "warning",
    highlight = "highlight"
}
interface TagComponent {
    variant: typeof TagVariant;
}
interface TagProps {
    variant?: TagVariant;
    children: string;
}
export declare const Tag: React.FC<TagProps> & TagComponent;
export {};
//# sourceMappingURL=index.d.ts.map