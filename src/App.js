import './App.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuCard} from "./components/MenuCard";


function App() {
    return (
        <div id="root">
            <div>
                    <MenuCard products={PRODUCTS_DATA}/>
            </div>
        </div>
    );
}

export default App;

