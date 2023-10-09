import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";

export function StateDemo() {
    const [demoValue, setDemoValue] = useState(0);
    return <Section title="state">
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton onClick={() => setDemoValue(0)}> SET 0 </MyButton>
            <MyButton onClick={() => setDemoValue(77)}> SET 77 </MyButton>
            <MyButton onClick={() => setDemoValue(184)}> SET 184 </MyButton>
        </div>
    </Section>;
}

