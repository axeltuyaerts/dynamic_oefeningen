import PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

function Number(props) {
    const {number} = props;
    return(
        <Col xs={4} sm={3} md={2} xxl={1} className={"text-center"}>
            <MyCard className={"m-2 p-2 shadow-sm"}>{number}</MyCard>
        </Col>
    )
}

export function Numbers(props) {
    const {numbers, title, isInitiallyOpen} = props;
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {numbers.map((n, i) => <Number key={i} number={n}/>)}
        </Section>
    );
}

Numbers.propTypes = {
    numbers: PropTypes.array,
    title: PropTypes.string
};