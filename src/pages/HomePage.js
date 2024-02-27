import Navigation from "../components/Navigation/Navigation";
import Content from "../components/Content/Content";

export default function HomePage() {
    return (
        <div>
            <Navigation/>
            <Content/>

            <Navigation language="Java">
                <span>This is the Description</span>
            </Navigation>
            <Navigation language="JavaScript">
                <button>Button</button>
            </Navigation>
            <Navigation language="Python"/>
            <Navigation language="PHP"/>
            <Navigation language="C++" lan="C#"/>
        </div>
    );
}