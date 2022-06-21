import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../images/banner-1.png";
import banner2 from "../images/banner-2.png";
import banner3 from "../images/banner-3.png";
import banner4 from "../images/banner-4.png";
import banner5 from "../images/banner-5.png";

const Hero = () => {
    return (
        <>
            <div className="my-4 hidden sm:block">
                <Carousel
                    infiniteLoop
                    emulateTouch={true}
                    centerMode={true}
                    centerSlidePercentage={60}
                    autoPlay={true}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                >
                    <img className="px-4" src={banner1} alt="" />
                    <img className="px-4" src={banner2} alt="" />
                    <img className="px-4" src={banner3} alt="" />
                    <img className="px-4" src={banner4} alt="" />
                    <img className="px-4" src={banner5} alt="" />
                </Carousel>
            </div>
            <div className="my-4 sm:hidden">
                <Carousel
                    infiniteLoop
                    emulateTouch={true}
                    autoPlay={true}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                >
                    <img className="px-4" src={banner1} alt="" />
                    <img className="px-4" src={banner2} alt="" />
                    <img className="px-4" src={banner3} alt="" />
                    <img className="px-4" src={banner4} alt="" />
                    <img className="px-4" src={banner5} alt="" />
                </Carousel>
            </div>
        </>
    );
};

export default Hero;
