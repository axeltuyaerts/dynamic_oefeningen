import {Button} from "react-bootstrap";

export function EventDemo() {
    return (
        <div className={"mt-3 rounded shadow-sm text-center"} style={{backgroundColor: "lavender"}}>
            <h2>events</h2>
            <button style={{width: "70%", margin: "0 0 2% 0"}} onClick={() => alert('ha')} >Click here!</button>
            <Button className={"bg-primary"} style={{width: "70%", margin: "0 0 2% 0", color:"white"}} onClick={() => alert('Bootstrap')} >Click here!</Button>
        </div>
    );
}