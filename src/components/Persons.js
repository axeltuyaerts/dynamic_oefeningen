import PropTypes from "prop-types";
import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";

export function Persons(props) {
    const {persons, title,isInitiallyOpen} = props;
    if (!persons){
        return "geen data";
    }
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {persons.map((person) =>
                <Col key={person.id} xs={12} sm={6} md={3} xxl={2} className={"text-center"}>
                    <MyCard title={person.name}>
                        <div>
                            {person.age && <div>{person.age}</div>}
                            {person.city && <div>{person.city}</div>}
                        </div>
                    </MyCard>
                </Col>)}
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
    isInitiallyOpen: PropTypes.bool
};