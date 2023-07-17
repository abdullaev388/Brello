import background from "@/assets/svg/onboarding-background.svg";
import backgroundDesktop from "@/assets/svg/onboarding-background-desktop.svg";
import folderShield from "@/assets/svg/folder-shield.svg";

import { FeaturedIcon } from "@/shared/ui/featured-icon";
import { InputWrapper, InputGroup, InputAddOn } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import styles from "./styles.module.css";

export const WorkspaceOnboardingPage = () => {
    return (
        <div className={styles.page}>
            <picture className={styles.picture}>
                <source
                    srcSet={backgroundDesktop}
                    media="(min-width: 1280px)"
                />
                <img src={background} alt="background" />
            </picture>

            <div className={styles.container}>
                <FeaturedIcon>
                    <img src={folderShield} alt="folder" />
                </FeaturedIcon>

                <div className={styles.title}>Let{"'"}s build a Workspace</div>
                <div className={styles.subtitle}>
                    Boost your productivity by making it easier for everyone to
                    access boards in one location.
                </div>

                <form className={styles.form}>
                    <InputWrapper size="md">
                        <label htmlFor="workspaceName">Workspace name</label>
                        <input
                            type="text"
                            name="workspaceName"
                            id="workspaceName"
                            placeholder="Your Company Co."
                        />
                    </InputWrapper>

                    <InputWrapper size="md">
                        <InputGroup>
                            <InputAddOn>brello.io/workspaces/</InputAddOn>
                            <input type="text" placeholder="your-company-co" />
                        </InputGroup>
                    </InputWrapper>

                    <InputWrapper size="md">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Our team organizes everything here."
                        />
                    </InputWrapper>

                    <Button appearance="primary" size="xl">
                        Get started
                    </Button>
                </form>
            </div>
        </div>
    );
};
