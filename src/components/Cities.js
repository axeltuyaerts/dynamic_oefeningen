import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {Section} from "./Section";
import PropTypes from "prop-types";


function City(props) {
    const {city} = props;
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <MyCard title={city.name}>
                {city.numberOfPersons}
            </MyCard>
        </Col>
    )
}

City.propTypes = {
    city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        numberOfPersons: PropTypes.number.isRequired
    })
}

export function Cities(props) {
    const {cities, title, isInitiallyOpen} = props;
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {cities.map(c => <City key={c.name} city={c}/>)}
        </Section>
    );
}

Cities.propTypes = {
    cities: PropTypes.array,
    title: PropTypes.string
};