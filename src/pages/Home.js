import Navigation from "../components/Navigation/Navigation";
import Content from "../components/Content/Content";
import {Link} from "react-router-dom";

export default function Home() {
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
        </div>
    );
}