import {PRODUCTS_DATA} from "../data/data";
import {MenuProduct} from "./MenuProduct";

export function MenuCard () {
    return (
        <div id="root">
            <div>
                <h1>Menu</h1>
                {PRODUCTS_DATA.map(p => <MenuProduct key={p.name} product ={p}/>)}
            </div>
        </div>
    );
}