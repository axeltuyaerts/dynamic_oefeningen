import {Persons} from "../components/Persons";

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div>
            <Persons persons={persons} title={"alle personen"}/>
        </div>
    )
}