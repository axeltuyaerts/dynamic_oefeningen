import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";

export function StateDemo() {
    const [demoValue, setDemoValue] = useState(0);
    return <Section title="state">
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton onClick={() => setDemoValue(0)}> SET 0 </MyButton>
            <MyButton onClick={() => setDemoValue(77)}> SET 77 </MyButton>
            <MyButton onClick={() => setDemoValue(184)}> SET 184 </MyButton>
        </div>

        <div>
            <Counter name={"counter1"}></Counter>
        </div>
        <div>
            <Counter name={"counter2"}></Counter>
        </div>
    </Section>;
}

