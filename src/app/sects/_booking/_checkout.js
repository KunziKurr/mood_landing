import { useEffect, useState } from 'react';
import svgService from '../../../svg_service'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const  Checkout = () => {
    const [showMenu, setShowMenu] = useState(0)
    const [showServices, setshowServices] = useState(0)
   
    return (
        <div className="checkout">
        checkout
 
        </div>
    )
}
export default Checkout;
