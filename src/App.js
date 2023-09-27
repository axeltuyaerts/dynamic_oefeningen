import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './App.css';
import {NUMBER_DATA, PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {NumbersPage} from "./pages/NumbersPage";


function App() {
    return (
        <div id="root">
            <Tabs>
                <TabList>
                    <Tab>menu</Tab>
                    <Tab>pics</Tab>
                    <Tab>numbers</Tab>
                </TabList>

                <TabPanel>
                    <MenuCardPage products={PRODUCTS_DATA}/>
                </TabPanel>
                <TabPanel>
                    <PicturesPage/>
                </TabPanel>
                <TabPanel>
                    <NumbersPage numbers={NUMBER_DATA}/>
                </TabPanel>
            </Tabs>


        </div>
    );
}

export default App;

