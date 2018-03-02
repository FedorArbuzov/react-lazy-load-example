import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import('./components/Home'));
const AsyncNotes = asyncComponent(() => import("./components/Notes"));

export default function App(childProps) {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={AsyncHome}
                    props={childProps}
                />

                <Route
                    path="/note"
                    exact
                    component={AsyncNotes}
                    props={childProps}
                />
            </Switch>
        </BrowserRouter>
    )
}

