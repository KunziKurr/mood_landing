
import svgService from '../../svg_service';
import Header from '../commons/_header'
import UrbanLux from './_urban_lux';
const Landing = () => {
  return <>
        <div className="landing">
        <Header />
        <div className="landing_wrapper">
          <div className="landing_wrapper_svg">
          {svgService.landing_1}
          </div>
        <h1 className="landing_wrapper_heading">
          Relax in Luxury
        </h1>
        </div>
        </div>

    </>
  
}

export default Landing;
