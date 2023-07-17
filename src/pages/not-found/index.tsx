import arrowLeft from "@/assets/svg/arrow-left.svg";

import { Button } from "@/shared/ui/button";

import styles from "./styles.module.css";

export const NotFoundPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.notFoundText}>404 error</div>
                <div className={styles.title}>We can’t find that page</div>
                <div className={styles.subtitle}>
                    Sorry, the page you are looking for doesn{"'"}t exist or has
                    been moved.
                </div>

                <div className={styles.actions}>
                    <Button
                        size="xl"
                        appearance="primary"
                        className={styles.actionsButton}
                    >
                        Take me home
                    </Button>

                    <Button
                        size="xl"
                        appearance="secondary"
                        className={styles.actionsButton}
                    >
                        <img src={arrowLeft} alt="back" />
                        Go back
                    </Button>
                </div>
            </div>
        </div>
    );
};
