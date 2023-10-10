import { useEffect, useState } from 'react';
import svgService from '../../../svg_service'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import extrasImg from '../../../assets/img/extras.svg'

const  Extras = () => {
    const [showMenu, setShowMenu] = useState(0)
    const [showServices, setshowServices] = useState(0)
   
    return (
        <div className="extras">
               <div className="people_wrapper">
     <h3 className="people_wrapper_heading">
       Enhance your visit
     </h3>
     <p className="people_wrapper_p">
     You may like to add one of our signature Products
     </p>

     <div className="extras_wrapper">
        <div className="extras_wrapper_extra">
            <div className="extras_wrapper_extra_thumbnail">
                 <img src={extrasImg} alt="" srcset="" />
            </div>
            <div className="extras_wrapper_extra_content">
                <p className="extras_wrapper_extra_content_p">
                    Signature Creme
                </p>
                <h2 className="extras_wrapper_extra_content_h2">
                    KES 1,200.00
                </h2>
                <p className="extras_wrapper_extra_content_p">
                    Signature Creme 
                </p>
            </div>
        </div>

        <div className="extras_wrapper_extra">
            <div className="extras_wrapper_extra_thumbnail">
             <img src={extrasImg} alt="" srcset="" />
            </div>
            <div className="extras_wrapper_extra_content">
                <p className="extras_wrapper_extra_content_p">
                    Signature Creme
                </p>
                <h2 className="extras_wrapper_extra_content_h2">
                    KES 1,200.00
                </h2>
                <p className="extras_wrapper_extra_content_p">
                    Signature Creme 
                </p>
            </div>
        </div>

     </div>
      
        <button className="button_next">
            Continue
        </button>
     </div>
 
        </div>
    )
}
export default Extras;
