
import svgService from '../../svg_service';
import Header from '../commons/_header'
import Footer from '../commons/_footer'

import contact_us from  '../../assets/img/contact_us.svg'
import Meet from '../../assets/img/meet.png'
import Team from '../../assets/img/team.svg'


const Contact = () => {
  return <>
     {/* Lux */}
        <div id="landing_lux" className="landing_lux about_us">
        <Header />
            <div className="landing_lux_wrapper">
            <div className="landing_wrapper">
          <div className="landing_wrapper_svg">
          <img src={contact_us} className='about_us_img' alt="" srcset="" />
          </div>
        <h1 className="landing_wrapper_heading">
          CONTACT US
        </h1>
        </div>
            </div>

              {/* welcome */}
              <div className="services_wrapper_welcome">
                <h3 className="services_wrapper_welcome_heading">
                    Contact Us
                </h3>
              <div className="liner"></div>

              <section className="contact_us">
                <div className="contact_us_container">
                  <div className="contact_us_container_grid">
                    <div className="contact_cont">
                      <p className="contact_cont_p">
                        14th Floor GTC Building
                      </p>
                      <p className="contact_cont_p">
                        Westlands, Nairobi
                      </p>
                    </div>

                    <div className="contact_cont">
                      <p className="contact_cont_p">
                        Monday - Sunday
                      </p>
                      <p className="contact_cont_p">
                        10:00A.M - 08:00PM
                      </p>
                    </div>
                    
                     <div className="contact_cont">
                      <p className="contact_cont_p">
                        +25472345678
                      </p>
                      <p className="contact_cont_p">
                        info@mood.com
                      </p>
                    </div>
                  </div>

                  <div className="contact_us_form">
                    <div className="contact_us_form_pane">
                        <h1 className="heading_1 black">Send an Inquiry</h1>
                        <p className="p_content black">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                          Maiores dolore eveniet ab, doloremque quidem sapiente, ratione deleniti eaque nobis in, 
                          veniam enim magni? Itaque nihil unde consectetur, eligendi amet autem!
                        </p>
                    </div>
                    <div className="contact_us_form_pane">
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
              </section>

              </div>
           
            <Footer />

        </div>

    </>
  
}

export default Contact;
