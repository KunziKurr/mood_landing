import logo from '../../assets/img/logo.png'


function Header() {
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
                    <button className="mood_header_menu_wrapper_menu_btn">==</button>
                </div>
            </div>
        </section>
        <FullMenu />
      </div>
    );
  }
  
  export default Header;
  

const FullMenu = () =>{
    return(
        <div className="mood_header_links">
            <nav className="mood_header_links_nav">
                <ul className="mood_header_links_nav_ul"></ul>
                <li className="mood_header_links_nav_ul_li">Home</li>
                <li className="mood_header_links_nav_ul_li">Services</li>
                <li className="mood_header_links_nav_ul_li">About Us</li>
                <li className="mood_header_links_nav_ul_li">Contact Us</li>
            </nav>
        </div>
    )
}