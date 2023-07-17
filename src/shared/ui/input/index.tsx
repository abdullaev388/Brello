import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

type WrapperSize = "sm" | "md";

type DivProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

type WrapperProps = DivProps & { size: WrapperSize };

type GroupProps = DivProps & { inside?: boolean };

export const InputWrapper = ({ size, children, ...props }: WrapperProps) => {
    return (
        <div {...props} className={getWrapperStyles({ size })}>
            {children}
        </div>
    );
};

export const InputGroup = ({ children, inside, ...props }: GroupProps) => {
    return (
        <div {...props} className={getGroupStyles({ inside })}>
            {children}
        </div>
    );
};

export const InputAddOn = ({ children, ...props }: DivProps) => {
    return (
        <div {...props} className={styles.inputAddon}>
            {children}
        </div>
    );
};

const getWrapperStyles = ({ size }: { size: WrapperSize }) => {
    return clsx(styles.inputWrapper, size === "md" && styles.md);
};

const getGroupStyles = ({ inside }: { inside?: boolean }) => {
    return clsx(styles.inputGroup, inside && styles.inside);
};
