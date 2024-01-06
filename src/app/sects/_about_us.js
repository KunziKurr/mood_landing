
import svgService from '../../svg_service';
import Header from '../commons/_header'
import Footer from '../commons/_footer'

import Asset3 from  '../../assets/img/3Asset.svg'
import Meet from '../../assets/img/meet.png'
import Team from '../../assets/img/team.svg'


const About = () => {
  return <>
     {/* Lux */}
        <div id="landing_lux" className="landing_lux about_us">
        <Header />
            <div className="landing_lux_wrapper">
            <div className="landing_wrapper">
          <div className="landing_wrapper_svg">
          <img src={Asset3} className='about_us_img' alt="" srcset="" />
          </div>
        <h1 className="landing_wrapper_heading">
          Relax in Luxury
        </h1>
        </div>
            </div>
            <section className="about_us_container">
              <div className="about_us_container_wrapper">
              <div className="about_us_container_wrapper_sect_1">
              <div className="about_us_container_wrapper_sect_1_img">
                <img src={Meet} alt="Mood team members"  />
              </div>

              </div>
               <div className="about_us_container_wrapper_sect_2">
                  <h1 className="heading_1 black">Why our clients choose us</h1>
                  <p className="p_content black">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Maiores dolore eveniet ab, doloremque quidem sapiente, ratione deleniti eaque nobis in, 
                    veniam enim magni? Itaque nihil unde consectetur, eligendi amet autem!
                  </p>
              </div>
              </div>
            </section>
            <div className="services_wrapper_transformation">
                <div className="services_wrapper_transformation_wrapper">
                    <h3 className="services_wrapper_transformation_wrapper_heading">
                        OUR SERVICES
                    </h3>
                    <div className="services_wrapper_transformation_wrapper_services">
                        <div className="service">
                            <h4 className="service_heading">Shave</h4>
                            <div className="service_line"></div>
                            <button className="service_btn">View More</button>
                        </div>

                        <div className="service">
                            <h4 className="service_heading"> Beard Treatment</h4>
                            <div className="service_line"></div>
                            <button className="service_btn">View More</button>
                        </div>

                        <div className="service">
                            <h4 className="service_heading">Massages</h4>
                            <div className="service_line"></div>
                            <button className="service_btn">View More</button>
                        </div>
                    </div>
                </div>
              </div>
              <div className="services_wrapper_transformation team">
                <div className="services_wrapper_transformation_wrapper">
                    <h3 className="services_wrapper_transformation_wrapper_heading">
                        OUR TEAM
                    </h3>
                    <p className="p_content black">
                    We employ the best manicurists and pedicurist in the industry.
                     We also educate our own award-winning specialists through constant training. 
                     Here are the most prominent talents.
                    </p>
                    <div className="services_wrapper_transformation_wrapper_services">
                        <div className="service team">
                           
                        </div>

                        <div className="service team">
                           
                        </div>

                        <div className="service team">
                           
                        </div>
                    </div>
                </div>
              </div>
            <Footer />

        </div>

    </>
  
}

export default About;
