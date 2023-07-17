import shapes from "@/assets/svg/shapes.svg";
import shapesDesktop from "@/assets/svg/shapes-desktop.svg";
import logo from "@/assets/img/logo.png";
import logoDesktop from "@/assets/img/logo-desktop.png";
import google from "@/assets/svg/google.svg";
import mail from "@/assets/svg/mail.svg";

import { InputWrapper } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import styles from "./styles.module.css";

export const AuthWithEmailPage = () => {
    return (
        <div className={styles.page}>
            <picture className={styles.picture}>
                <source srcSet={shapesDesktop} media="(min-width: 1280px)" />
                <img src={shapes} alt="shapes" className={styles.shapes} />
            </picture>

            <div className={styles.container}>
                <picture>
                    <source srcSet={logoDesktop} media="(min-width: 1280px)" />
                    <img src={logo} alt="Brello" />
                </picture>

                <div className={styles.mainContent}>
                    <div className={styles.title}>Sign in</div>
                    <div className={styles.subtitle}>
                        Start your 30-day free trial.
                    </div>

                    <form className={styles.form}>
                        <InputWrapper size="md">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </InputWrapper>

                        <div className={styles.actions}>
                            <Button size="lg" appearance="primary">
                                Get started
                            </Button>

                            <Button size="lg" appearance="secondary">
                                <img src={google} alt="Google" />
                                Sign up with google
                            </Button>
                        </div>
                    </form>
                </div>

                <div className={styles.footer}>
                    <div>© Brello 2023</div>
                    <a className={styles.mail} href="mailto:help@brello.io">
                        <img src={mail} alt="mail" />
                        help@brello.io
                    </a>
                </div>
            </div>
        </div>
    );
};
