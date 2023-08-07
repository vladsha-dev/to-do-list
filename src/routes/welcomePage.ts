import { lazy } from "react";

export const WelcomePageComponent = lazy(
    () =>
        import(
            /* webpackChunkName: "welcome-page" */ "../pages/WelcomePage/WelcomePage"
        )
);
