import { useLocation } from 'react-router-dom'
import ImageGallery from "react-image-gallery";
import { Splide, SplideSlider } from '@splidejs/react-splide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Player } from 'video-react';
import olaples from '../../../assets/vids/Olaplex Video.mp4'
import ReactPlayer from 'react-player/lazy'
import Headers from '../../commons/_header'
import Meet from '../../../assets/img/meet.png'
import Prod1 from '../../../assets/img/prodcut_1.png'
import Prod2 from '../../../assets/img/product_2.png'
import Footer from '../../commons/_footer';

import Asset1 from  '../../../assets/img/Asset1.svg'
import Asset2 from  '../../../assets/img/2Asset.svg'
import Asset3 from  '../../../assets/img/3Asset.svg'
import Asset4 from  '../../../assets/img/4Asset.svg'
import Asset5 from  '../../../assets/img/5Asset.svg'
import Asset6 from  '../../../assets/img/6Asset.svg'


const Ladies = () => {
    let location = useLocation();
    // console.log(location.state.from);

    const images = [
        {
          original: Asset1,
        //   thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: Asset2,
        //   thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: Asset3,
        //   thumbnail: "https://picsum.photos/id/1019/250/150/",
        }, {
            original: Asset4,
        //   thumbnail: "https://picsum.photos/id/1019/250/150/",
        }, {
            original: Asset5,
        //   thumbnail: "https://picsum.photos/id/1019/250/150/",
        },{
            original: Asset6,
        //   thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ]

    return(
    <>
        <div className="services home">
        <Headers />
            <div className="services_wrapper">
              <div className="services_wrapper_header">
              
                 <ImageGallery 
                    items={images} 
                    lazyLoad={true} 
                    infinite={true} 
                    showBullets={false} 
                    autoPlay={true} 
                    showFullscreenButton={false} 
                    showPlayButton={true}
                    showNav={false}

                 />
               {/* <div className="non_slider">
               <h6 className="services_wrapper_header_subheadings">MOOD HAIR</h6>
                <h6 className="services_wrapper_header_subheadings">EXTENSIONS STUDIO</h6>
                <h6 className="services_wrapper_header_subheadings">FROM KES 850</h6>
                <button className="services_wrapper_header_btn">Book Now</button>
               </div> */}
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
                            <h4 className="service_heading"> Nails</h4>
                            <div className="service_line"></div>
                            <button className="service_btn">View More</button>
                        </div>

                        <div className="service">
                            <h4 className="service_heading">Eyelashes/Eyebrows</h4>
                            <div className="service_line"></div>
                            <button className="service_btn">View More</button>
                        </div>
                    </div>
                </div>
              </div>
              {/* meet our team */}
              <div className="services_wrapper_meet">
                <div className="services_wrapper_meet_wrapper">
                    <h3 className="services_wrapper_meet_wrapper_heading">Our Product line</h3>



                    {/* <div className="member_wrapper video_prev">
      <ReactPlayer playing={true} loop={true} url={olaples} width="100%" height="auto" />
                    </div> */}

                  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
      <div className="member_wrapper">
                        {/* <div className="member">
                            <div className="member_initials">
                                <span className="member_initials_name">Devines </span>
                                <div className="member_initials_roles">
                                <span className="member_initials_roles_role">Hair Stylist</span>
                                <span className="member_initials_roles_role"> Professional Qualified Aesthetician</span>
                                </div>
                            </div>
                        </div> */}
                        <div className="member">
                           <img src={Prod1} alt="Mood team members"  />
                        </div>
                        {/* <div className="member">
                            <p className="member_desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec elementum elit at tortor tincidunt dignissim. Nam eget venenatis erat.
                                Nam accumsan nisl eget dignissim blandit.
                            </p>
                            <svg id="icon-trending_neutral" viewBox="0 0 24 24">
    <path d="M21.984 12l-3.984 3.984v-3h-15v-1.969h15v-3z"></path>
    </svg>
                        </div> */}
                    </div>
      </SwiperSlide>
      <SwiperSlide> 
      <div className="member_wrapper">
      <div className="member_wrapper">
                        {/* <div className="member">
                            <div className="member_initials">
                                <span className="member_initials_name">Devines </span>
                                <div className="member_initials_roles">
                                <span className="member_initials_roles_role">Hair Stylist</span>
                                <span className="member_initials_roles_role"> Professional Qualified Aesthetician</span>
                                </div>
                            </div>
                        </div> */}
                        <div className="member">
                           <img src={Prod2} alt="Mood team members"  />
                        </div>
                        {/* <div className="member">
                            <p className="member_desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec elementum elit at tortor tincidunt dignissim. Nam eget venenatis erat.
                                Nam accumsan nisl eget dignissim blandit.
                            </p>
                            <svg id="icon-trending_neutral" viewBox="0 0 24 24">
    <path d="M21.984 12l-3.984 3.984v-3h-15v-1.969h15v-3z"></path>
    </svg>
                        </div> */}
                    </div>
                    </div>
      </SwiperSlide> 
     </Swiper>












                 
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
export default Ladies;