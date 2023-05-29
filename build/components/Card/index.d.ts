import React from "react";
import "./styles.scss";
declare enum CardVariant {
    default = "default",
    highlight = "highlight"
}
interface CardComponent {
    variant: typeof CardVariant;
}
interface CardProps {
    variant?: CardVariant;
    children: React.ReactNode;
    noPadding?: boolean;
    noShadow?: boolean;
}
export declare const Card: React.FC<CardProps> & CardComponent;
export {};
//# sourceMappingURL=index.d.ts.map