import {Numbers} from "../components/Numbers";

export function NumbersPage(props) {
    const {numbers} = props

    return (
        <div>
            <Numbers numbers={numbers} title="alle getallen"/>
            <Numbers numbers={numbers.filter((getal) => getal > 6)} title="alle getallen"/>
        </div>
    );
}