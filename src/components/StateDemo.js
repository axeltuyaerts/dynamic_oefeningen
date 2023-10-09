import {useState} from "react";
import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function StateDemo() {
    const [demoValue, setDemoValue] = useState(0);
    return <Section title="state">
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
            <Button variant={"primary"} size={"sm"} className={"ms-2 mt-1"} onClick={() => setDemoValue(0)}>
                SET 0
            </Button>
            <Button variant={"primary"} size={"sm"} className={"ms-2 mt-1"} onClick={() => setDemoValue(77)}>
                SET 77
            </Button>
            <Button variant={"primary"} size={"sm"} className={"ms-2 mt-1"} onClick={() => setDemoValue(184)}>
                SET 184
            </Button>
        </div>
    </Section>;
}