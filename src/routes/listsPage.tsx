import { lazy } from "react";

export const ListsPageComponent = lazy(
    () =>
        import(
            /* webpackChunkName: "lists-page" */ "../pages/ListsPage/ListsPage"
        )
);
