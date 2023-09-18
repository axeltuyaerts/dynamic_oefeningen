import './App.css';
import {MenuProduct} from "./components/MenuProduct";
import {PRODUCTS_DATA} from "./data/data";


function App() {
    return (
        <div id="root">
            <div>
                <h1>Menu</h1>
                <MenuProduct product={PRODUCTS_DATA[0]}/>
                <MenuProduct product={PRODUCTS_DATA[1]}/>
                <MenuProduct product={PRODUCTS_DATA[2]}/>
                <MenuProduct product={PRODUCTS_DATA[3]}/>
                <MenuProduct product={PRODUCTS_DATA[4]}/>


            </div>
        </div>
    );
}

export default App;

