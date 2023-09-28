import PropTypes from "prop-types";
import {Card, Col, Container, Row} from "react-bootstrap";

export function Cars(props) {
    const {cars, title} = props;
    const carDivs = cars.map((car) => (
        <div key={car.id} className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <Container>
                <Row>
                    <Col>
                        <Card className={"m-2 p-2 shadow-sm text-center"}>
                            <h3 className="text-center">{title}</h3>
                            <h3>{car.name}</h3>
                            <div>Merk: {car.brand}</div>
                            <div>Type: {car.type}</div>
                            <div>Kleur: {car.color}</div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    ));
    return <div>{carDivs}</div>;

}

Cars.propTypes = {
    cars: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            brand: PropTypes.string,
            type: PropTypes.string,
            color: PropTypes.string
        })
    ),
    title: PropTypes.string
};