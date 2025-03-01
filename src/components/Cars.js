import PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

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
    const {cars, title,isInitiallyOpen} = props;
    if (!cars){
        return "geen data";
    }
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {cars.map((car) =>
                <Col key={car.id} xs={12} sm={6} md={3} xxl={2} className={"text-center"}>
                    <MyCard title={car.name}>
                        <div>
                            {car.brand && <div>merk: {car.brand}</div>}
                            {car.type && <div>type: {car.type}</div>}
                            {car.note && <div>opm: {car.note}</div>}
                            <CarColor color={car.color}/>
                        </div>
                    </MyCard>
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
        })
    ),
    title: PropTypes.string.isRequired,
    isInitiallyOpen: PropTypes.bool
};