import React from "react";
import "./styles.scss";
interface AvatarSource {
    image: string | React.ReactNode | undefined;
    altText: string;
    backgroundColor?: string;
    iconColor?: string;
    isFullSizeImage?: boolean;
}
interface AvatarProps {
    source: AvatarSource[];
    size?: string;
    borderColor?: string;
}
export declare const Avatar: {
    ({ source, size, borderColor }: AvatarProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map