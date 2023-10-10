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
                       <div className="people_wrapper">
     <h3 className="people_wrapper_heading">
     Checkout Details
     </h3>  
     <p className="people_wrapper_p">
     Total for your Booking on <strong>17 August: <span>KES 12,300 </span></strong>
     </p>

<Details />
     

   
      
        <button className="button_next">
            Continue
        </button>
     </div>
 
        </div>
    )
}
export default Checkout;


const Details = () =>{
    return(
        <div className="form_details">
        <div className="form_details_grid_cont">
            <div className="form_details_container">
                <label htmlFor="name" className="form_details_container_label">First Name</label>
                <input type="text" className="form_details_container_input" />
            </div>
            <div className="form_details_container">
                <label htmlFor="name" className="form_details_container_label">Last Name</label>
                <input type="text" className="form_details_container_input" />
            </div>
        </div> 
        <div className="form_details_grid_cont">
            <div className="form_details_container">
                <label htmlFor="name" className="form_details_container_label">Email Address</label>
                <input type="text" className="form_details_container_input" />
            </div>
            <div className="form_details_container">
                <label htmlFor="name" className="form_details_container_label">Mobile Number</label>
                <input type="text" className="form_details_container_input" />
            </div>
        </div>
        <div className="form_details_container">
                <label htmlFor="name" className="form_details_container_label">Promo Code/Discount</label>
                <input type="text" className="form_details_container_input" />
            </div>


            <div className="form_details_container">
                <input type='checkbox' className="form_details_container_input" />
                <label htmlFor="name" className="form_details_container_label">Promo Code/Discount</label>
            </div>

            <div className="form_details_container">
                <input type="checkbox" className="form_details_container_input" />
                <label htmlFor="name" className="form_details_container_label">Promo Code/Discount</label>
            </div>

        </div>
    )
}