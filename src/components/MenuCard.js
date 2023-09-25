import {MenuProduct} from "./MenuProduct";

export function MenuCard(props) {
    const {products} = props;
    if (!products) return;
    return (
        <div>
            <h1>Menu</h1>
            {products.map(p => <MenuProduct key={p.name} product={p}/>)}
        </div>

    );
}