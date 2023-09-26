import { useLocation } from 'react-router-dom'
import ImageGallery from "react-image-gallery";

import Headers from '../commons/_header'
import Meet from '../../assets/img/meet.png'
import Footer from '../commons/_footer';
const Services = () => {
    let location = useLocation();
    // console.log(location.state.from);

    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
        //   thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
        //   thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
        //   thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ]

    return(
    <>
        <div className="services">
        <Headers />
            <div className="services_wrapper">
              <div className="services_wrapper_header">
              
                 <ImageGallery items={images} infite={true} showBullets={false} autoPlay={true} showFullscreenButton={false} showPlayButton={true}/>
               <div className="non_slider">
               <h6 className="services_wrapper_header_subheadings">MOOD HAIR</h6>
                <h6 className="services_wrapper_header_subheadings">EXTENSIONS STUDIO</h6>
                <h6 className="services_wrapper_header_subheadings">FROM KES 850</h6>
                <button className="services_wrapper_header_btn">Book Now</button>
               </div>
              </div>
              {/* welcome */}
              <div className="services_wrapper_welcome">
              <div className="liner"></div>
                <h3 className="services_wrapper_welcome_heading">
                    WELCOME
                </h3>

                <p className="services_wrapper_welcome_p">
                We offer a wide range of hair services that cater to the unique needs and preferences of every client. Our team of award-winning hair stylists provides the highest quality services, from hair cuts & blow drys, to hair coloring, hair treatments, and hair extensions. We use the latest techniques and best-in-class products to create a flawless finish.
                </p>
              <div className="liner"></div>



              </div>
              {/* transformation */}
              <div className="services_wrapper_transformation">
                <div className="services_wrapper_transformation_wrapper">
                    <h3 className="services_wrapper_transformation_wrapper_heading">
                        Ready for your <br></br>
                        <span> Transormation ?</span>
                    </h3>
                    <div className="services_wrapper_transformation_wrapper_services">
                        <div className="service">
                            <h4 className="service_heading">HAIR STYLING</h4>
                            <div className="service_line"></div>
                            <button className="service_btn">View More</button>
                        </div>

                        <div className="service">
                            <h4 className="service_heading"> BARBER</h4>
                            <div className="service_line"></div>
                            <button className="service_btn">View More</button>
                        </div>

                        <div className="service">
                            <h4 className="service_heading">Spa</h4>
                            <div className="service_line"></div>
                            <button className="service_btn">View More</button>
                        </div>
                    </div>
                </div>
              </div>
              {/* meet our team */}
              <div className="services_wrapper_meet">
                <div className="services_wrapper_meet_wrapper">
                    <h3 className="services_wrapper_meet_wrapper_heading">Meet Our Team</h3>
                    <div className="member_wrapper">
                        <div className="member">
                            <div className="member_initials">
                                <span className="member_initials_name">Beth Awuor</span>
                                <div className="member_initials_roles">
                                <span className="member_initials_roles_role">Hair Stylist</span>
                                <span className="member_initials_roles_role"> Professional Qualified Aesthetician</span>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                           <img src={Meet} alt="Mood team members"  />
                        </div>
                        <div className="member">
                            <p className="member_desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec elementum elit at tortor tincidunt dignissim. Nam eget venenatis erat.
                                Nam accumsan nisl eget dignissim blandit.
                            </p>
                            <svg id="icon-trending_neutral" viewBox="0 0 24 24">
    <path d="M21.984 12l-3.984 3.984v-3h-15v-1.969h15v-3z"></path>
    </svg>
                        </div>
                    </div>
                </div>
              </div>
              {/* middle banner */}
              <div className="services_wrapper_banner">
                <div className="services_wrapper_banner_wrapper">
                    <h3 className="sub_heading white"> “Beauty doesn’t require sacrifice. <br></br> Beauty needs care.” </h3>
                    <p className="p_content white">
                        Hair Stylist Flani Poetic
                    </p>
                </div>
              </div>
              {/* consult */}
        <div className="services_wrapper_consult">
            <div className="services_wrapper_consult_wrapper">
                <div className="services_wrapper_consult_wrapper_container">
                    <h3 className="sub_heading"> In need of a consultation? </h3>
                    <p className="p_content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Donec elementum elit at tortor tincidunt dignissim. Nam eget venenatis erat. 
                     Nam accumsan nisl eget dignissim blandit.
                    </p>
                </div>
                <div className="services_wrapper_consult_wrapper_container">
                    <form action="submit" className="consult">
                        <input type="text" name="name" id="name" placeholder='Your Name' className="consult_input" />
                        <input type="text" name="name" id="name" placeholder='Your Name' className="consult_input" />
                        <div className="consult_btns">
                            <button className="consult_btns btn_primary">
                                Send Request
                            </button>
                            <svg id="icon-trending_neutral" viewBox="0 0 24 24">
                                 <path d="M21.984 12l-3.984 3.984v-3h-15v-1.969h15v-3z"></path>
                            </svg>
                        </div>
                    </form>
                </div>
            </div>
        </div>

            </div>
            <Footer />
        </div>
    </>
    )
}
export default Services;