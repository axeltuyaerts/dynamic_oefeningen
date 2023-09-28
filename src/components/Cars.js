import PropTypes from "prop-types";
import {Card, Col, Container, Row} from "react-bootstrap";
import {COLOR_DATA} from "../data/data";

export function Cars(props) {
    const {cars, title} = props;
    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h3 className={"text-center"}>{title}</h3>
            <Container>
                <Row>
                    {cars.map((car) =>
                        <Col key={car.id}
                             xs={12} sm={6} md={3} xxl={2}
                             className={"text-center"}>
                            <Card className={"m-2 p-2 shadow-sm text-center"}>
                                <div>
                                    {car.name && <h3>{car.name}</h3>}
                                    {car.brand && <div>merk: {car.brand}</div>}
                                    {car.type && <div>type: {car.type}</div>}
                                    {car.note && <div>opm: {car.note}</div>}
                                    {car.color && <div className={findCarColor(car.color)}>kleur: {car.color}</div>}
                                </div>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
}

export function findCarColor(carColor) {
    const carcolor = carColor;
    const bgColor = COLOR_DATA.find(carEl => carEl.color === carcolor)
    return bgColor.css;
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