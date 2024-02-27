import React from "react";
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function btnSaveCustomer() {
    console.log("Customer Saved!");
}

function App() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contacts" element={<Contacts/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        /*<div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

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

            <Button id="saveCustomer" variant="primary" onClick={btnSaveCustomer}>Save Customer</Button>

        </div>*/
    );
}

export default App;