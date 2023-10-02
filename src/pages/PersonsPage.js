import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div>
            <Persons persons={persons} title={"alle personen"}/>
            <Persons persons={[...persons].sort((p1,p2) => p2.age - p1.age)} title={"alle personen volgens leeftijd"}/>
            <Numbers numbers={persons.map(p => p.age)} title={"leeftijden"}/>
        </div>
    )
}