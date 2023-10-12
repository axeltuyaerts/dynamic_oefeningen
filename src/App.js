import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './App.css';
import {PERSON_DATA,CAR_DATA,NUMBER_DATA, PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {NumbersPage} from "./pages/NumbersPage";
import {CarPage} from "./pages/CarPage";
import {PersonsPage} from "./pages/PersonsPage";
import {EventAndStatePage} from "./pages/EventAndStatePage";
import {FavoriteNumberPage} from "./pages/FavoriteNumberPage";
import {InputPage} from "./pages/InputPage";



function App() {
    return (
        <div id="root">
            <Tabs>
                <TabList>
                    <Tab>menu</Tab>
                    <Tab>pics</Tab>
                    <Tab>numbers</Tab>
                    <Tab>cars</Tab>
                    <Tab>persons</Tab>
                    <Tab>events&state</Tab>
                    <Tab>fav numbers</Tab>
                    <Tab>input</Tab>
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
                <TabPanel>
                    <CarPage cars={CAR_DATA}/>
                </TabPanel>
                <TabPanel>
                    <PersonsPage persons={PERSON_DATA}/>
                </TabPanel>
                <TabPanel>
                    <EventAndStatePage/>
                </TabPanel>
                <TabPanel>
                    <FavoriteNumberPage numbers={NUMBER_DATA}/>
                </TabPanel>
                <TabPanel>
                    <InputPage/>
                </TabPanel>
            </Tabs>


        </div>
    );
}

export default App;

