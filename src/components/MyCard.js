import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {title, children} = props;

    const handleCardClick = () => {
        const childContent = props.title || props.children; // Inhoud van de child component
        alert(`${childContent}`);
    };

    return <Card className="m-2 p-2 shadow-sm text-center" onClick={handleCardClick}>
        <h5>{title}</h5>
        {children}
    </Card>
        ;
}