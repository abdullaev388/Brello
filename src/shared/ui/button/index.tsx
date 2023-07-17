import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

type ButtonAppearance = "primary" | "secondary";

type ButtonCustomProps = {
    size: ButtonSize;
    appearance: ButtonAppearance;
    className?: string;
};

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> &
    ButtonCustomProps;

export const Button = ({
    size,
    appearance,
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            {...props}
            className={getClassname({ size, appearance, className })}
        >
            {children}
        </button>
    );
};

const getClassname = ({ size, appearance, className }: ButtonCustomProps) => {
    return clsx(
        styles.button,
        {
            [styles.primary]: appearance === "primary",
            [styles.secondary]: appearance === "secondary",
        },
        {
            [styles.sm]: size === "sm",
            [styles.md]: size === "md",
            [styles.lg]: size === "lg",
            [styles.xl]: size === "xl",
            [styles.size2xl]: size === "2xl",
        },
        className,
    );
};
