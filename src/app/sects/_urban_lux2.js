
import svgService from '../../svg_service';
import Header from '../commons/_header'
const UrbanLux2 = () => {
  return <>
     {/* Lux */}
        <div id="landing_lux" className="landing_lux">
        <Header />
            <div className="landing_lux_wrapper">
                <div className="landing_lux_wrapper_img">
                    {svgService.UrbanLux}
                </div>
                <div className="landing_lux_wrapper_container">
                    <h1 className="landing_lux_wrapper_container_heading">
                    Your Urban Luxury
                    </h1>
                    <p className="landing_lux_wrapper_container_p">
                    In A World Of Constant Buzzing, Ringing, Beeping, And Email Stacking… The Stress Of Modern-Day Life Has The Power To Hold Us Captive, To Wear Down Our Bodies And Minds, And Make Us Feel Defeated. But You Have A Secret Weapon. ‍
                    </p>
                    <p className="landing_lux_wrapper_container_p">

                     The Refuge Spa Is Your Tool For Recovery So You Can Get Back Out And Rise. Rise Above The Stress, The Noise, The Pressure, And Live Life To Its Fullest. You Aren’t Going To Be A Victim Of Overwhelm. Instead, You’re Going To Take Time To Take Care Of Yourself So That You Can Get Back Out There And Thrive.
                    </p>
                    <button className="landing_lux_wrapper_container_btn">
                        Book Now
                    </button>
                </div>
            </div>
        </div>

    </>
  
}

export default UrbanLux2;
