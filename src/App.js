import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";

function App() {
    return (
        <Router>
            <div>
                <Switch>

                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="/aboutme">
                        <AboutMe/>
                    </Route>

                    <Route path="/contactus">
                        <ContactUs/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;