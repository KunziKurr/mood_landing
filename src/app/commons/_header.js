import { useState } from 'react';
import logo from '../../assets/img/logo.png'
import svgService from '../../svg_service'


const  Header = () => {
    const [showMenu, setShowMenu] = useState(0)
    return (
      <div className="mood_header">
        <section className="mood_header_menu">
            <div className="mood_header_menu_wrapper">
                <div className="mood_header_menu_wrapper_logo">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="mood_header_menu_wrapper_service">
                    <span className="mood_header_menu_wrapper_service_span">Services</span>
                    <button className="mood_header_menu_wrapper_service_btn">+</button>
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
                <li className="mood_header_links_nav_ul_li">Home</li>
                <li className="mood_header_links_nav_ul_li">Services</li>
                <li className="mood_header_links_nav_ul_li">About Us</li>
                <li className="mood_header_links_nav_ul_li">Contact Us</li>
                </ul>
            </nav>
        </div>
        :<></>
    )
}///