import Navigation from "../components/Navigation/Navigation";
import Content from "../components/Content/Content";

export default function HomePage() {
    return (
        <div>
            <Navigation/>
            <Content/>

            {/*<Navigation language="Java"/>
            <Navigation language="JavaScript"/>
            <Navigation language="Python"/>
            <Navigation language="PHP"/>
            <Navigation language="C++"/>*/}
        </div>
    );
}