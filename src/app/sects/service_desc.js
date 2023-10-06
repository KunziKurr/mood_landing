import { useLocation } from 'react-router-dom'

import Headers from '../commons/_header'
import Meet from '../../assets/img/meet.png'
import Footer from '../commons/_footer';
const ServicesDesc = () => {
    let location = useLocation();
    if (location.state.from != null) {
        console.log(location.state.from)
    }
    return(
    <>
        <div className="services desc">
        <Headers />
            <div className="services_wrapper ">
              <div className="services_wrapper_header service_desc">
                <h6 className="services_wrapper_header_subheadings">MOOD HAIR</h6>
                <h6 className="services_wrapper_header_subheadings">EXTENSIONS STUDIO</h6>
                <h6 className="services_wrapper_header_subheadings">FROM KES 850</h6>
                <button className="services_wrapper_header_btn">Book Now</button>
              </div>
              {/* welcome */}
              <div className="services_wrapper_welcome">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
                <h3 className="services_wrapper_welcome_heading">
                    OUR PRICES
                </h3>

               
                <ul className="services_wrapper_services_ul">
                    <li className="services_wrapper_services_ul_li">
                        Hair Cut
                    </li>
                   <li className="services_wrapper_services_ul_li a">
                        Hair Styling
                    </li>
                    <li className="services_wrapper_services_ul_li">
                        Hair Color
                    </li>
                    <li className="services_wrapper_services_ul_li">
                        Hair Treatment
                    </li>
                </ul>

                <p className="services_wrapper_welcome_p">
                We offer a wide range of hair services that cater to the unique needs and preferences of every client. 
                </p>

              </div>
          
              {/* meet our team */}
              <div className="services_wrapper_meet">
                <div className="services_wrapper_meet_wrapper">
                    {/* <h3 className="services_wrapper_meet_wrapper_heading">Meet Our Team</h3> */}
                    <div className="member_wrapper">
                        <div className="member">
                            <div className="member_initials">
                                <span className="member_initials_name">Place Where</span>
                                <span className="member_initials_name">Your Health</span>
                                <span className="member_initials_name">And Beauty Starts</span>

                                {/* <div className="member_initials_roles">
                                <span className="member_initials_roles_role">Hair Stylist</span>
                                <span className="member_initials_roles_role"> Professional Qualified Aesthetician</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="member">
                           <img src={Meet} alt="Mood team members"  />
                        </div>
                        <div className="member">
                            <ul className="services_quote_list">
                                <li className="services_quote_list_l">
                                    <span>Product desc </span>
                                    <span className="price">KES 2,000</span>
                                </li>
                                <li className="services_quote_list_l">
                                    <span>Product desc </span>
                                    <span className="price">KES 2,000</span>
                                </li>
                                <li className="services_quote_list_l">
                                    <span>Product desc </span>
                                    <span className="price">KES 2,000</span>
                                </li>
                                <li className="services_quote_list_l">
                                    <span>Product desc </span>
                                    <span className="price">KES 2,000</span>
                                </li>
                                <div className="consult_btns">
                            <button className="consult_btns btn_primary">
                                Book Appointment
                            </button>
                            <svg id="icon-trending_neutral" viewBox="0 0 24 24">
                                 <path d="M21.984 12l-3.984 3.984v-3h-15v-1.969h15v-3z"></path>
                            </svg>
                        </div>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
          
              {/* consult */}
              <div className="base_container">
                <h3 className="services_wrapper_welcome_heading">
                    HAIR AT  MOOD
                </h3>
                <p>
                We offer a wide range of hair services that cater to the unique needs and preferences of every client. Our team of award-winning hair stylists provides the highest quality services, from hair cuts & blow drys, to hair coloring, hair treatments, and hair extensions. We use the latest techniques and best-in-class products to create a flawless finish.
                </p>
            </div>
    
            </div>
            <Footer />
        </div>
    </>
    )
}
export default ServicesDesc;