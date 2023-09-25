import {MenuCard} from "../components/MenuCard";

export function MenuCardPage(props) {
    const {products} = props;
    return <MenuCard products={products}/>;
}