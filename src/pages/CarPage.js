import {Cars} from "../components/Cars";

export function CarPage(props) {
    const {cars} = props

    return (
        <div>
            <Cars cars={cars} title="Auto's"/>
        </div>
    );
}