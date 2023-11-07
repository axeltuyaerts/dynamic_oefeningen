import {Numbers} from "../components/Numbers";

export function NumbersPage(props) {
    const {numbers} = props

    return (
        <div>
            <Numbers numbers={numbers} title="alle getallen" isInitiallyOpen={true}/>
            <Numbers numbers={numbers.filter((getal) => getal > 6)} title="getallen > 6"/>
            <Numbers numbers={numbers.map((getal) => getal * 2)} title="getallen x 2"/>
        </div>
    );
}