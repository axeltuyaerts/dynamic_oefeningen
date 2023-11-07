import {useState} from "react";
import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function StateDemo() {
    const [demoValue, setDemoValue] = useState(0);

    return <Section title={"state"}>
        <div>de waarde van de demoValue is {demoValue}</div>
        <Button onClick={() => setDemoValue(77)}> SET 77</Button>
    </Section>
}