import PropTypes from "prop-types";
import {Card, Col, Container, Row} from "react-bootstrap";

export function Numbers(props) {
    const {numbers, title} = props
    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h3 className="text-center">{title}</h3>
            <Container>
                <Row>
                    {numbers.map((n, i) =>
                        <Col key={i}
                             xs={4} sm={3} md={2} xxl={1}
                             className={"text-center "}>
                            <Card className="m-2 p-2 shadow-sm">{n}</Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
}

Numbers.propTypes = {
    numbers: PropTypes.array,
    title: PropTypes.string
};