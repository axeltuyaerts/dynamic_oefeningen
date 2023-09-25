import 'normalize.css';
import './App.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";


function App() {
    return (
        <div id="root">
            <MenuCardPage products={PRODUCTS_DATA}/>
            <PicturesPage/>
        </div>
    );
}

export default App;

