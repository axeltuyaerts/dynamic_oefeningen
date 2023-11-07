import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function EventDemo() {
    return (
        <Section title={"events"}>
            <button className={"m-3"} onClick={() => {
                alert("Button is clicked")
            }}>click me please!
            </button>
            <Button className={"m-3"} onClick={e => alert(`bootstrap is clicked - pos : ${e.clientX}, ${e.clientY}`)}>click
                me please!</Button>

            <div className={"m-3"} style={{backgroundColor: "pink"}} onClick={() => alert("div is clicked")}>
                <div>dit is een div met eventHandler</div>
                <a href="http://google.com" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert("link is clicked ")
                }}>dit is een link met een href</a> - en - <Button onClick={(e) => {e.stopPropagation(); alert("button is clicked")}}>dit is een button</Button>
            </div>
        </Section>

    );
}