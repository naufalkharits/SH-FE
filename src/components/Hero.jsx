import { useState } from "react";
import Slider from "react-slick";
import banner1 from "../images/banner-1.png";
import banner2 from "../images/banner-2.png";
import banner3 from "../images/banner-3.png";
import banner4 from "../images/banner-4.png";

const Hero = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [banner1, banner2, banner3, banner4];

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <div className="mx-auto w-11/12 py-4">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div
                        className={
                            idx === imageIndex
                                ? "opacity-100 transition-transform"
                                : "scale-[0.75] opacity-75 transition-transform"
                        }
                    >
                        <img className="mx-auto w-full" src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
