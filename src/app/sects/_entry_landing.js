import { useLocation,useNavigate } from 'react-router-dom'
import {useState,useEffect } from 'react';
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
      const targetDate = new Date('February 1, 2024 00:00:00'); // Set your target date here
      const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;
    
        if (difference <= 0) {
          // Target date has passed, you can handle this case as needed
          return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
        }
    
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return {
          days,
          hours,
          minutes,
          seconds,
        };
      };

      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(timer);
      }, [])

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
                    showNav={true}
                    onImageMouseOver={handleMouseOver}
                    onImageMouseLeave={handleMouseLeave}
                    autoPlay={!isSlideshowPaused}
                    originalHeight ={true}
                    originalWidth ={true}
                    slideDuration={3750}
                    slideInterval={700}
                    flickThreshold={0.75}
                    swipingTransitionDuration={100}

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

              {/* <div className='wave_container'>


              <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="55%" x2="100%" y2="45%"><stop offset="5%" stop-color="#4D0433"></stop><stop offset="95%" stop-color="#031640"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,166 0,166 C 182.93333333333334,200.13333333333333 365.8666666666667,234.26666666666668 515,222 C 664.1333333333333,209.73333333333332 779.4666666666667,151.06666666666666 928,134 C 1076.5333333333333,116.93333333333334 1258.2666666666667,141.46666666666667 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
  <defs><linearGradient id="gradient" x1="0%" y1="55%" x2="100%" y2="45%"><stop offset="5%" stop-color="#340423"></stop><stop offset="95%" stop-color="#031640"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,333 0,333 C 153.86666666666667,320.8666666666667 307.73333333333335,308.7333333333333 451,324 C 594.2666666666667,339.2666666666667 726.9333333333334,381.93333333333334 890,388 C 1053.0666666666666,394.06666666666666 1246.5333333333333,363.5333333333333 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>

              </div> */}

              <div className="path_container">
                <div className="path_container_wrapper">
                   <div className="path_container_wrapper_grid_1">
                    <h4 className="path_container_wrapper_grid_1_heading">
                      COMING SOON
                    </h4>
                   </div>

                   <div className="path_container_wrapper_grid_2">
                    {/* <h4 className="path_container_wrapper_grid_2_heading">
                      COUNT DOWN
                    </h4> */}
                    <h4>{timeLeft.days} Days, {timeLeft.hours} Hrs, {timeLeft.minutes} Min, {timeLeft.seconds} Secs</h4>
                   </div>

                  {/* Updated */}


                </div>
              </div>
              </div>
              </div>
              </>
        )
    }
    export default EntrLanding;