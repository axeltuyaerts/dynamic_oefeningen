import {useState} from "react";
import {MyButton} from "./MyButton";

export function OnOffDemo(){
    const [isOn, setIsOn] = useState(false)
    return(
        <div>
            <div>de huidige waarde van isOn is: {isOn ? "ON" : "OFF"}</div>
            <MyButton onClick={() => setIsOn(false)}>off</MyButton>
            <MyButton onClick={() => setIsOn(true)}>on</MyButton>
            <MyButton onClick={() => setIsOn(!isOn)}>toggle</MyButton>
        </div>
    )
}