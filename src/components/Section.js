import PropTypes from "prop-types";
import {Button, Container, Row} from "react-bootstrap";

export function Section(props) {
    const {title, children} = props;
    return (
        <div className={"mt-3 rounded shadow-sm p-2"} style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title} <Button className={"bg-transparent text-primary"} style={{width: "5%", margin: "2%"}} onClick={() => alert('tik tak tok')} >klik</Button></h2>
            <Container >
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};