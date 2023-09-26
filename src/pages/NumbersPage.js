import {Numbers} from "../components/Numbers";

export function NumbersPage(props) {
    const {numbers} = props

    return (
        <div className="mx-3">
            <Numbers numbers={numbers} title={"Alle getallen"}/>
        </div>
    );
}