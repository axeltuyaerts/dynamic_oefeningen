import PropTypes from "prop-types";
import {Card, Col, Container, Row} from "react-bootstrap";

export function Cars(props) {
    const {cars, title} = props;
    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h3 className={"text-center"}>{title}</h3>
            <Container>
                <Row>
                    {cars.map((car) =>
                        <Col key={car.id}
                             xs={12}
                             className={"text-center"}>
                            <Card className={"m-2 p-2 shadow-sm text-center"}>
                                <div>{car.name && <h3>{car.name}</h3>}</div>
                                <div>{car.brand && <div>{"merk: " + car.brand}</div>}</div>
                                <div>{car.type && <div>{"type: " + car.type}</div>}</div>
                                <div>{car.color && <div>{"kleur: "+ car.color}</div>}</div>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
}

Cars.propTypes = {
    cars: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            brand: PropTypes.string,
            type: PropTypes.string,
            color: PropTypes.string
        }).isRequired
    ),
    title: PropTypes.string.isRequired
};