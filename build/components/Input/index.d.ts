import React from "react";
import "./styles.scss";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    customInput?: React.ReactElement;
    id: string;
    label?: string | React.ReactNode;
    leftElement?: string | React.ReactNode;
    rightElement?: string | React.ReactNode;
    note?: string | React.ReactNode;
    error?: string | React.ReactNode;
}
export declare const Input: React.FC<InputProps>;
export {};
//# sourceMappingURL=index.d.ts.map