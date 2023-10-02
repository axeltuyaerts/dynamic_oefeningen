import PropTypes from "prop-types";
import {Card, Col} from "react-bootstrap";
import {Section} from "./Section";


export function Numbers(props) {
    const {numbers, title} = props;
    return (
        <Section title={title}>
            {numbers.map((n, i) => <Numbers key={i} n=
                {<Col xs={4} sm={3} md={2} xxl={1} className={"text-center"}>
                    <Card className={"m-2 p-2 shadow-sm"}>{n}</Card>
                </Col>}/>)}
        </Section>
    );
}

Numbers.propTypes = {
    numbers: PropTypes.array,
    title: PropTypes.string
};