import {Button, Row} from "react-bootstrap";
import {Section} from "./Section";

export function EventDemo() {
    return (
        <Section title={"events"}>

            <Row>
                <button style={{width: "20%", margin: "0 0 2% 0"}}
                        onClick={(e) => alert(`hallo (${e.clientX},${e.clientY})`)}>Click here!
                </button>
            </Row>
            <Row>
                <Button className={"bg-primary"} style={{width: "20%", margin: "0 0 2% 0", color: "white"}}
                        onClick={() => alert('Bootstrap')}>Click here!</Button>
            </Row>

            <div style={{backgroundColor: "pink"}} onClick={() => alert('div is clicked')}>
                <p>Dit is een div</p>
                <p><a href={"https://www.youtube.com/"} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert('Link is clicked')
                }}>dit is een link met een href</a> - en - <Button className={"bg-primary"} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert('Bootstrap')
                }}>dit is een button</Button></p>
            </div>

        </Section>
    );
}