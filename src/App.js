import './App.css';
import {MenuProduct} from "./components/MenuProduct";
import {PRODUCTS_DATA} from "./data/data";


function App() {
    return (
        <div id="root">
            <div>
                <h1>Menu</h1>
                {PRODUCTS_DATA.map(p => <MenuProduct key={p.name} product ={p}/>)}
            </div>
        </div>
    );
}

export default App;

