import {Persons} from "../components/Persons";

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div>
            <Persons persons={persons} title={"alle personen"}/>
            <Persons persons={[...persons].sort((p1,p2) => p2.age - p1.age)} title={"alle personen volgens leeftijd"}/>
        </div>
    )
}