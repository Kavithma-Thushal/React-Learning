import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

export default function Contacts() {
    const Navigate = useNavigate();
    return (
        <div>
            <h1>Contact Us</h1>
            <Button variant="success" onClick={() => Navigate(-1)}>Back</Button>
        </div>
    );
}