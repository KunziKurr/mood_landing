import { useLocation,useNavigate } from 'react-router-dom'
import {useState } from 'react';
import ImageGallery from "react-image-gallery";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import svgService from '../../svg_service';
import { NavLink } from 'react-router-dom';




// import Meet from '../../assets/img/meet.png'
// import Prod1 from '../../assets/img/prodcut_1.png'
// import Prod2 from '../../assets/img/product_2.png'
// import Footer from '../commons/_footer';
// import { Player } from 'video-react';
// import olaples from '../../assets/vids/Olaplex Video.mp4'
// import ReactPlayer from 'react-player/lazy'



import Asset1 from  '../../assets/img/Asset1.svg'
import Asset2 from  '../../assets/img/2Asset.svg'
import Asset3 from  '../../assets/img/3Asset.svg'
import Asset4 from  '../../assets/img/4Asset.svg'
import Asset5 from  '../../assets/img/5Asset.svg'
import Asset6 from  '../../assets/img/6Asset.svg'


const EntrLanding = () => {
    // let location = useLocation();
     const navigate = useNavigate();


    const [isSlideshowPaused, setSlideshowPaused] = useState(false);

    const handleMouseOver = () => {
      setSlideshowPaused(true);
    };
  
    const handleMouseLeave = () => {
      setSlideshowPaused(false);
    }; 
    

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
        <div className="services landing_entry">
        {/* <Headers /> */}
            <div className="services_wrapper">
              <div className="services_wrapper_header">
              
                 <ImageGallery 
                    items={images} 
                    lazyLoad={true} 
                    infinite={true} 
                    showBullets={false} 
                    showFullscreenButton={false} 
                    showPlayButton={false}
                    showNav={false}
                    onImageMouseOver={handleMouseOver}
                    onImageMouseLeave={handleMouseLeave}
                    autoPlay={!isSlideshowPaused}

                 />
               {/* <div className="non_slider">
               <h6 className="services_wrapper_header_subheadings">MOOD HAIR</h6>
                <h6 className="services_wrapper_header_subheadings">EXTENSIONS STUDIO</h6>
                <h6 className="services_wrapper_header_subheadings">FROM KES 850</h6>
                <button className="services_wrapper_header_btn">Book Now</button>
               </div> */}



              </div>
              {/* welcome */}
              {/* <div className="services_wrapper_welcome">
              <div className="liner"></div>
                <h3 className="services_wrapper_welcome_heading">
                    WELCOME
                </h3>

                <p className="services_wrapper_welcome_p">
                We offer a wide range of hair services that cater to the unique needs and preferences of every client. Our team of award-winning hair stylists provides the highest quality services, from hair cuts & blow drys, to hair coloring, hair treatments, and hair extensions. We use the latest techniques and best-in-class products to create a flawless finish.
                </p>
              <div className="liner"></div>



              </div> */}

              <div className='wave_container'>


              <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="55%" x2="100%" y2="45%"><stop offset="5%" stop-color="#4D0433"></stop><stop offset="95%" stop-color="#031640"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,166 0,166 C 182.93333333333334,200.13333333333333 365.8666666666667,234.26666666666668 515,222 C 664.1333333333333,209.73333333333332 779.4666666666667,151.06666666666666 928,134 C 1076.5333333333333,116.93333333333334 1258.2666666666667,141.46666666666667 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
  <defs><linearGradient id="gradient" x1="0%" y1="55%" x2="100%" y2="45%"><stop offset="5%" stop-color="#340423"></stop><stop offset="95%" stop-color="#031640"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,333 0,333 C 153.86666666666667,320.8666666666667 307.73333333333335,308.7333333333333 451,324 C 594.2666666666667,339.2666666666667 726.9333333333334,381.93333333333334 890,388 C 1053.0666666666666,394.06666666666666 1246.5333333333333,363.5333333333333 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>

              </div>

              <div className="path_container">
                <div className="path_container_wrapper">
                    <div className="path_container_wrapper_cont ladies" onClick={()=>{navigate("/ladies")}}>
                    {svgService.HER}
                  
                    <div className="ladies_container">
                       <h2 className="ladies_container_heading">
                        Mood for Her
                       </h2>
                       {/* <p className="ladies_container_co">
                       A salon for the woman who wants it all: gorgeousness, Elegance, Flawless skin, and a Fabulous Mood.
                       </p> */}
                       <ul className="service_bul">
                        <li className="service_bul_bull">
                            Hair
                        </li>  
                         <li className="service_bul_bull">
                            Nails
                        </li>
                          <li className="service_bul_bull">
                            Skin Test
                        </li>  
                         <li className="service_bul_bull">
                            Hair Treatment
                        </li>
                         <li className="service_bul_bull">
                            Authentic products
                        </li>  
                         <li className="service_bul_bull">
                            ...More
                        </li>
                        
                       </ul>
                       <button className="service_bul_btn"  onClick={()=>{navigate("/ladies")}}>
                           Saloon
                       <svg id="icon-arrow_right_alt" viewBox="0 0 24 24">
<path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
</svg>
                       </button>
                    </div>

                    </div>
                    <div className="path_container_wrapper_cont welcome">
                 
        <h1 className="path_container_wrapper_cont_heading">
         Welcome to Mood
        </h1>
           <h2 className="path_container_wrapper_cont_heading secondary">
           Your one-stop shop for style and grooming.
        </h2>
                    </div>

                    <div className="path_container_wrapper_cont men" onClick={()=>{navigate("/gentlemen")}}>
                    {svgService.HIM}
                  
                    <div className="ladies_container">
                       <h2 className="ladies_container_heading">
                        Mood for Him
                       </h2>
                       {/* <p className="ladies_container_co">
                       A salon for the woman who wants it all: gorgeousness, Elegance, Flawless skin, and a Fabulous Mood.
                       </p> */}
                       <ul className="service_bul">
                        <li className="service_bul_bull">
                            Hair
                        </li>  
                         <li className="service_bul_bull">
                            Nails
                        </li>
                          <li className="service_bul_bull">
                            Skin Test
                        </li>  
                         <li className="service_bul_bull">
                            Hair Treatment
                        </li>
                         <li className="service_bul_bull">
                            Authentic products
                        </li>  
                         <li className="service_bul_bull">
                            ...More
                        </li>
                        
                       </ul>
   

                       <button className="service_bul_btn" onClick={()=>{navigate("/gents")}}>
                          Gents
                       <svg id="icon-arrow_right_alt" viewBox="0 0 24 24">
                        <path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                        </svg>
                       </button>
                    </div>

                    </div>


                </div>
              </div>
              </div>
              </div>
              </>
        )
    }
    export default EntrLanding;