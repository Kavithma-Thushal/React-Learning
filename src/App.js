import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";

function App() {
    return (
        /*<Router>
            <div>
                <Switch>

                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="/about">
                        <AboutMe/>
                    </Route>

                    <Route path="/contact">
                        <ContactUs/>
                    </Route>

                </Switch>
            </div>
        </Router>*/
        <div>
            <h1>React Bootstrap</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Customer Management</Accordion.Header>
                    <Accordion.Body>
                        Customer management involves the strategic and operational activities undertaken by businesses
                        to build and maintain relationships with their customers throughout the entire customer
                        lifecycle. This multifaceted process encompasses various aspects such as understanding customer
                        needs and preferences, acquiring new customers, retaining existing ones, providing exceptional
                        customer service, and fostering loyalty. Effective customer management involves utilizing tools
                        like customer relationship management (CRM) software, implementing personalized marketing
                        strategies, actively engaging with customers through multiple channels, and continuously
                        analyzing feedback to improve products and services. By prioritizing customer satisfaction and
                        loyalty, businesses can enhance their reputation, increase customer lifetime value, and
                        ultimately drive sustainable growth.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Item Management</Accordion.Header>
                    <Accordion.Body>
                        Item Management involves the strategic and operational activities undertaken by businesses to
                        manage their inventory throughout the entire item lifecycle. This comprehensive process includes
                        aspects such as understanding item demand and trends, procuring new items, managing existing
                        ones, ensuring optimal stock levels, and enhancing item quality. Effective item management
                        entails utilizing tools like inventory management software, implementing efficient procurement
                        strategies, actively monitoring item performance, and continuously analyzing market feedback to
                        improve offerings. By prioritizing item quality and demand, businesses can optimize their
                        inventory turnover, reduce carrying costs, and ultimately drive sustainable profitability.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default App;