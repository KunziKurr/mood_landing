import { useEffect, useState } from 'react';
import svgService from '../../../svg_service'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const  Date = () => {
    const [showMenu, setShowMenu] = useState(0)
    const [showServices, setshowServices] = useState(0)
   
    return (
        <div className="date">
          <div className="people_wrapper">
     <h3 className="people_wrapper_heading">
       When are you coming ?
     </h3>
     <p className="people_wrapper_p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, 
        illum dolore facilis harum, doloremque fugiat assumenda antium?
     </p>
        <div className="people_wrapper_input">
            <div className="people_wrapper_input_wrapper">
             
                 <span className="people_wrapper_input_wrapper_span">
                    <input type="date" name="date_when" id="" />
                </span>   
               
            </div>    
             <div className="people_wrapper_input_wrapper">
              
                 <span className="people_wrapper_input_wrapper_span">
                    <input type="time" name="tine_when" id="" />
                </span>   
               
            </div>
           
        </div>
        <button className="button_next">
            Continue
        </button>
     </div>
 
        </div>
    )
}
export default Date;
