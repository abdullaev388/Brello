import background from "@/assets/svg/user-onboarding-background.svg";
import backgroundDesktop from "@/assets/svg/user-onboarding-background-desktop.svg";
import user from "@/assets/svg/user-01.svg";

import { FeaturedIcon } from "@/shared/ui/featured-icon";
import { InputWrapper } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import styles from "./styles.module.css";

export const UserOnboardingPage = () => {
    return (
        <div className={styles.page}>
            <picture className={styles.picture}>
                <source
                    srcSet={backgroundDesktop}
                    media="(min-width: 1280px)"
                />
                <img src={background} alt="Decoration" />
            </picture>

            <div className={styles.container}>
                <FeaturedIcon>
                    <img src={user} alt="User" />
                </FeaturedIcon>

                <div className={styles.title}>Please, introduce yourself</div>
                <div className={styles.subtitle}>
                    You can do this later on Profile page. <a href="#">Skip</a>
                </div>

                <form className={styles.form}>
                    <InputWrapper size="md">
                        <label htmlFor="firstName">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First name"
                        />
                    </InputWrapper>

                    <InputWrapper size="md">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last name"
                        />
                    </InputWrapper>

                    <Button size="xl" appearance="primary">
                        Continue
                    </Button>
                </form>
            </div>
        </div>
    );
};
