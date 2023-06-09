import React from "react";
import "./styles.scss";
interface TableColumnLabel {
    id: string;
    label: string | React.ReactNode;
    sortBy?: boolean;
}
interface TableProps<T> {
    id?: string;
    data: T[];
    columnLabels: TableColumnLabel[];
    renderItemRow: (item: T) => React.ReactElement;
    breakpoint: 300 | 400 | 500 | 600 | 700 | 800 | 900;
    hideNumberColumn?: boolean;
    isLoading?: boolean;
    emptyMessage?: string;
    pageSize?: number;
}
export declare const Table: {
    <T extends Record<string, any>>({ id, data, columnLabels, renderItemRow, breakpoint, hideNumberColumn, isLoading, emptyMessage, pageSize, }: TableProps<T>): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map