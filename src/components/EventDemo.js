import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function EventDemo() {
    return (
        <Section title={"events"}>
            <button className={"m-3"} onClick={() => {
                alert("Button is clicked")
            }}>click me please!
            </button>
            <Button className={"m-3"} onClick={() => alert("Bootstrap is clicked")}>click me please!</Button>
        </Section>

    );
}