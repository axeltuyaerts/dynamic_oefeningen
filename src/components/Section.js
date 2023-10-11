import PropTypes from "prop-types";
import {Button, Container, Row} from "react-bootstrap";
import {useState} from "react";

function OpenCloseButton(props) {
    const {isOpen, onChangeIsOpen} = props;
    return (
        <Button  className={"bg-transparent text-primary"} onClick={() => onChangeIsOpen(!isOpen)}>
            {isOpen ? "-" : "+"}
        </Button>
    );
}

function SectionContent(props){
    const {isOpen, children} = props;
    if (!isOpen) return;
    return(
      <Container>
          <Row>
              {children}
          </Row>
      </Container>
    );
}

export function Section(props) {
    const {title, children,isInitiallyOpen} = props;
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);
    return (
        <div className={"mt-3 rounded shadow-sm p-2"} style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title} <OpenCloseButton isOpen={isOpen} onChangeIsOpen={() => setIsOpen(!isOpen)}/></h2>
            <SectionContent isOpen={isOpen}>
                {children}
            </SectionContent>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};