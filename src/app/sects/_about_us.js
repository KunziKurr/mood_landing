
import svgService from '../../svg_service';
import Header from '../commons/_header'

import Asset3 from  '../../assets/img/3Asset.svg'
import Meet from '../../assets/img/meet.png'


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
              </div>
              </div>
            </section>
        </div>

    </>
  
}

export default About;
