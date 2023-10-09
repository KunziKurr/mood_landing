import { useEffect, useState,createContext, useContext  } from 'react';
import logo from '../../assets/img/logo.png'
import svgService from '../../svg_service'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '../commons/_header'
import People from './_booking/_people'
import Date from './_booking/_date'
import Time from './_booking/_time'
import Extras from './_booking/_extras'
import Checkout from './_booking/_checkout'
import 'react-tabs/style/react-tabs.css';

const CountContext = createContext(null);


const  Booking = () => {
    const [showMenu, setShowMenu] = useState(0)
    const [showServices, setshowServices] = useState(0)
    const [activeTab, setActiveTab] = useState(6);

    const handleTabSwitch = (index) => {
      setActiveTab(index);
    };
    
   
    return (
        <CountContext.Provider value={{ activeTab, setActiveTab }}>
        <div className="booking">
        {/* <Header /> */}
     

        <div className="booking_wrapper">
            <div className="booking_wrapper_container _booking">
            <div className="booking_header">
            <button className="booking_header_btn">
                BACK
            </button>
        </div>
            <div className="_booking_tab_container">
                <Tabs activeKey={activeTab} onChange={handleTabSwitch}>
                    <TabList>
                    <Tab>People</Tab>
                    <Tab>Date</Tab>
                    <Tab>Time</Tab>
                    <Tab>Extras</Tab>
                    <Tab>Checkout</Tab>
                    </TabList>

                    <TabPanel>
                   <People />
                    </TabPanel>
                    <TabPanel>
                    <Date />
                    </TabPanel>
                    <TabPanel>
                    <Time />
                    </TabPanel>
                    <TabPanel>
                    <Extras />
                    </TabPanel>  
                    <TabPanel>
                    <Checkout />
                    </TabPanel>
                </Tabs>
            </div>

            </div>
            <div className="booking_wrapper_container _cart"></div>
        </div>
 
        </div>
        </CountContext.Provider>
    )
}
export default Booking;
