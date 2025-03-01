import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {title, onSelect, isMarked, children} = props;
    const className = `m-2 p-2 shadow-sm text-center ${isMarked && "bg-warning"}`;
    return <Card className={className}
                 onClick={onSelect}>
        <h5>{title}</h5>
        {children}
    </Card>;
}

