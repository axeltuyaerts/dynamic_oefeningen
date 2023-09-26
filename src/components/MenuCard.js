import {MenuProduct} from "./MenuProduct";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function MenuCard(props) {
    const {products} = props;
    if (!products) return;
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Menu</h1>
                    {products.map(p => <MenuProduct key={p.name} product={p}/>)}
                </Col>
            </Row>
        </Container>

    );
}