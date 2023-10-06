
import svgService from '../../svg_service';
import Header from '../commons/_header'
const About = () => {
  return <>
     {/* Lux */}
        <div id="landing_lux" className="landing_lux">
        <Header />
            <div className="landing_lux_wrapper">
            <div className="landing_wrapper">
          <div className="landing_wrapper_svg">
          {svgService.landing_1}
          </div>
        <h1 className="landing_wrapper_heading">
          Relax in Luxury
        </h1>
        </div>
            </div>
        </div>

    </>
  
}

export default About;
