import Content from "../components/Content/Content";
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Contacts'

export default function Home() {
    const Navigate = useNavigate();
    return (
        <div>
            {/*<Navigation/>
            <Content/>

            <Navigation language="Java">
                <span>This is the Description</span>
            </Navigation>
            <Navigation language="JavaScript">
                <button>Button</button>
            </Navigation>
            <Navigation language="Python"/>
            <Navigation language="PHP"/>
            <Navigation language="C++" lan="C#"/>*/}
            <h1>Home</h1>
            <Link to="/about">Go to About Page</Link>
            <br/>
            <Button variant="primary" onClick={() => Navigate("/contacts")}>Contacts</Button>
        </div>
    );
}