import { useState } from "react";
import Slider from "react-slick";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import banner1 from "../images/banner-1.png";
import banner2 from "../images/banner-2.png";
import banner3 from "../images/banner-3.png";
import banner4 from "../images/banner-4.png";

const Hero = () => {
    const images = [banner1, banner2, banner3, banner4];

    // const NextArrow = ({ onClick }) => (
    //     <div
    //         className="absolute right-0 top-1/2 z-10 cursor-pointer bg-black"
    //         onClick={onClick}
    //     >
    //         <FiArrowRight className="text-white" />
    //     </div>
    // );

    // const PrevArrow = ({ onClick }) => (
    //     <div
    //         className="absolute left-0 top-1/2 z-10 cursor-pointer bg-black"
    //         onClick={onClick}
    //     >
    //         <FiArrowLeft className="text-white" />
    //     </div>
    // );

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
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
    );
};

export default Hero;
