import PropTypes from "prop-types";
import {Card, Col} from "react-bootstrap";
import {Section} from "./Section";

const COLOR_DATA = [
    {color: "blauw", css: "blue", cssFront: "white"},
    {color: "geel", css: "yellow"},
    {color: "zwart", css: "black", cssFront: "white"},
    {color: "wit", css: "white"},
    {color: "rood", css: "red", cssFront: "white"},
    {color: "grijs", css: "gray", cssFront: "white"},
    {color: "groen", css: "green", cssFront: "white"}
];

function styleColor(color) {
    const colorCar = COLOR_DATA.find(c => c.color === color);
    if (!colorCar) return;
    return {
        backgroundColor: colorCar.css,
        color: colorCar.cssFront
    };
}

function CarColor(props) {
    const {color} = props;

    if (!color) return null;
    return <div style={styleColor(color)}>
        kleur : {color} &nbsp;
    </div>
}

export function Cars(props) {
    const {cars, title} = props;
    return (

        <Section title={title}>
            {cars.map((car) =>
                <Col key={car.id} xs={12} sm={6} md={3} xxl={2} className={"text-center"}>
                    <Card className={"m-2 p-2 shadow-sm text-center"}>
                        <div>
                            {car.name && <h3>{car.name}</h3>}
                            {car.brand && <div>merk: {car.brand}</div>}
                            {car.type && <div>type: {car.type}</div>}
                            {car.note && <div>opm: {car.note}</div>}
                            <CarColor color={car.color}/>
                        </div>
                    </Card>
                </Col>)}
        </Section>
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