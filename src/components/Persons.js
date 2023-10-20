import PropTypes from "prop-types";
import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {MyButton} from "./MyButton";

function Person(props) {
    const {person, onDeletePerson, onEditPerson} = props;
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={person.name}>
                <div>{person.age}</div>
                <div className={"pb-2"}>{person.city}</div>
                {onDeletePerson && (
                    <div className="border-top border-2 solid pt-2">
                        <MyButton onClick={() => onDeletePerson(person)}>Delete</MyButton>
                        <MyButton onClick={() => onEditPerson(person)}>edit</MyButton>
                    </div>
                )}
            </MyCard>
        </Col>
    );
}

Person.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
    }),
    onDeletePerson: PropTypes.func,
    onEditPerson: PropTypes.func,
};

export function Persons(props) {
    const {persons, title, isInitiallyOpen, onDeletePerson, onEditPerson} = props;
    if (!persons) {
        return "geen data";
    }
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {persons.map(p => <Person key={p.id} person={p} onDeletePerson={onDeletePerson} onEditPerson={onEditPerson}/>)}
        </Section>
    )
}

Persons.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
            city: PropTypes.string
        })
    ),
    title: PropTypes.string.isRequired,
    isInitiallyOpen: PropTypes.bool,
    onDeletePerson: PropTypes.func.isRequired,
};