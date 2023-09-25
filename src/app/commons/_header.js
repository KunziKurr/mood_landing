import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png'
import svgService from '../../svg_service'
import { NavLink } from 'react-router-dom';


const  Header = () => {
    const [showMenu, setShowMenu] = useState(0)
    const [showServices, setshowServices] = useState(0)
   
    return (
      <div className="mood_header">
        <section className="mood_header_menu">
            <div className="mood_header_menu_wrapper">
                <div className="mood_header_menu_wrapper_logo">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="mood_header_menu_wrapper_service">


               

                { showServices ?
                    <button onClick={()=>{setshowServices(0)}} className="mood_header_menu_wrapper_menu_btn close zindex_4 header_services">  <span className="mood_header_menu_wrapper_menu_span zindex_4 ">Services</span> {svgService.minus}</button>
                        :
                    <button onClick={()=>{setshowServices(1)}} className="mood_header_menu_wrapper_menu_btn header_services ">  <span className="mood_header_menu_wrapper_menu_span zindex_4">Services</span> {svgService.add}</button>
                        
                    }
                  
                </div>
                <div className="mood_header_menu_wrapper_menu">
                    <span className="mood_header_menu_wrapper_menu_span">Menu</span>
                    { showMenu ?
                        <button onClick={()=>{setShowMenu(0)}} className="mood_header_menu_wrapper_menu_btn close">x</button>
                        :
                        <button onClick={()=>{setShowMenu(1)}} className="mood_header_menu_wrapper_menu_btn ">{svgService.Menu}</button>
                    }
                </div>
            </div>
        </section>
        <FullMenu showMenu={showMenu} />
        <Services showServices={showServices} setshowServices={setshowServices} />
      </div>
    );
  }
  
export default Header;
  

const FullMenu = (showMenu) =>{
    return(
        showMenu.showMenu ?
        <div className="mood_header_links">
            <nav className="mood_header_links_nav">
                <ul className="mood_header_links_nav_ul">

                <li className="mood_header_links_nav_ul_li">
                <NavLink  to="/">Home</NavLink>

                </li>
                <li className="mood_header_links_nav_ul_li">
                <NavLink  to="/services">Services</NavLink>

                </li>
                <li className="mood_header_links_nav_ul_li">
                <NavLink  to="/about-us">About us</NavLink>
                </li>
                <li className="mood_header_links_nav_ul_li">
                <NavLink  to="/contact-us">Contact us</NavLink>
                </li>
                </ul>
            </nav>
        </div>
        :<></>
    )
}///

const Services = ({showServices, setshowServices}) =>{
    return(
        showServices ?
        <div className="mood_header_links">
            <nav className="mood_header_links_nav">
                <ul className="mood_header_links_nav_ul">
                <NavLink  to="/serve/"  onClick={()=>{setshowServices(0)}} className={({ isActive}) => isActive ? "active" : "" } state={{ from: "hair_styling" }} >Hair Styling</NavLink>
                <NavLink  to="/serve/"  onClick={()=>{setshowServices(0)}} className={({ isActive}) => isActive ? "active" : "" } state={{ from: "Barbershop" }} >Barbershop</NavLink>
                <NavLink  to="/serve/"  onClick={()=>{setshowServices(0)}} className={({ isActive}) => isActive ? "active" : "" } state={{ from: "Facials" }} >Facials</NavLink>
                <NavLink  to="/serve/"  onClick={()=>{setshowServices(0)}} className={({ isActive}) => isActive ? "active" : "" } state={{ from: "Nails" }} >Nails</NavLink>

                </ul>
            </nav>
        </div>
        :<></>
    )
}///

