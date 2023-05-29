import React from "react";
import "./styles.scss";
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    id: string;
    label?: string | React.ReactNode;
    leftElement?: string | React.ReactNode;
    rightElement?: string | React.ReactNode;
    note?: string | React.ReactNode;
    error?: string | string;
    children: React.ReactNode;
}
export declare const Select: React.FC<SelectProps>;
export {};
//# sourceMappingURL=index.d.ts.map