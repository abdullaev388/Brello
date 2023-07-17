import React from "react";

import styles from "./styles.module.css";

type FeaturedIconProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export const FeaturedIcon = ({ children, ...props }: FeaturedIconProps) => {
    return (
        <div className={styles.featuredIcon} {...props}>
            {children}
        </div>
    );
};
