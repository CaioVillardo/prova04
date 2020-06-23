import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing/index";
import NotFound from "../src/components/NotFound/index"

export default (props) => (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Landing} />
                <Route path="*" component={NotFound}/>
            </Switch>
    </BrowserRouter>
);