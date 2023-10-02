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

export function Cars(props) {
    const {cars, title} = props;
    return (

        <Section title={title}
                 content={cars.map((car) =>
                     <Col key={car.id} xs={12} sm={6} md={3} xxl={2} className={"text-center"}>
                         <Card className={"m-2 p-2 shadow-sm text-center"}>
                             <div>
                                 {car.name && <h3>{car.name}</h3>}
                                 {car.brand && <div>merk: {car.brand}</div>}
                                 {car.type && <div>type: {car.type}</div>}
                                 {car.note && <div>opm: {car.note}</div>}
                                 {car.color &&
                                     <div style={{backgroundColor: findCarColor(car.color)}}>kleur: {car.color}</div>}
                             </div>
                         </Card>
                     </Col>)}/>
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