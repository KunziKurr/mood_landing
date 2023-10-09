import { useEffect, useState,useContext,createContext   } from 'react';

import svgService from '../../../svg_service'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CountContext = createContext("");

const  People = () => {
    const [showMenu, setShowMenu] = useState(0)
    const [showServices, setshowServices] = useState(0)
    const [numberofPple, setnumberofPple] = useState(0)

    const {  activeTab, setActiveTab } = useContext(CountContext);

  const handleTabSwitch = () => {
    setActiveTab(activeTab + 1);
  };



    const handleBtnClick = (i) =>{
        if(i === "add"){
            setnumberofPple(numberofPple + 1)
        }
        else if(i === "minus" && numberofPple >= 2){
             setnumberofPple(numberofPple - 1)
        }
    }
   
    return (
        <div className="people">
     <div className="people_wrapper">
     <h3 className="people_wrapper_heading">
        How many people ?
     </h3>
     <p className="people_wrapper_p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, 
        illum dolore facilis harum, doloremque fugiat assumenda antium?
     </p>
        <div className="people_wrapper_input">
            <div className="people_wrapper_input_wrapper">
                <span className="people_wrapper_input_wrapper_span">
                    People
                </span>  
                 <span className="people_wrapper_input_wrapper_span">
                   <button onClick={()=>{handleBtnClick("minus")}}>-</button>
                </span>   
                <span className="people_wrapper_input_wrapper_span">
                    {numberofPple}
                </span>   
                <span className="people_wrapper_input_wrapper_span">
                <button  onClick={()=>{handleBtnClick("add")}}>+</button>
                </span>
            </div>
        </div>
        <button className="button_next" onClick={handleTabSwitch}>
            Continue
        </button>
     </div>
        </div>
    )
}
export default People;
