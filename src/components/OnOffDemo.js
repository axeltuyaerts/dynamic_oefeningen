import {useState} from "react";
import {MyButton} from "./MyButton";

export function OnOffDemo(){
    const [isOn,setIsOn] = useState(false);

    return(
        <>
            <div>huidige waarde van isOn is: {isOn ? "ON" : "OFF"}</div>
            <div>
                <MyButton onClick={() => setIsOn(false)}>off</MyButton>
                <MyButton onClick={() => setIsOn(true)}>on</MyButton>
                <MyButton onClick={() => setIsOn(!isOn)}>toggle</MyButton>
            </div>
        </>
    )
}