// import { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// // import Slider from "react-slick";
// import banner1 from "../images/banner-1.png";
// import banner2 from "../images/banner-2.png";
// import banner3 from "../images/banner-3.png";
// import banner4 from "../images/banner-4.png";
// import banner5 from "../images/banner-5.png";

// const Hero = () => {
//     // const [imageIndex, setImageIndex] = useState(0);
//     const images = [banner1, banner2, banner3, banner4, banner5];

//     // const settings = {
//     //     centerMode: true,
//     //     infinite: true,
//     //     centerPadding: 0,
//     //     slidesToShow: 3,
//     //     speed: 500,
//     //     responsive: [
//     //         {
//     //             breakpoint: 1024,
//     //             settings: {
//     //                 slidesToShow: 2,
//     //             },
//     //         },
//     //         {
//     //             breakpoint: 768,
//     //             settings: {
//     //                 slidesToShow: 1,
//     //             },
//     //         },
//     //     ],
//     //     beforeChange: (current, next) => setImageIndex(next),
//     // };

//     return (
//         // <div className="mx-auto w-11/12 py-4">
//         //     <Slider {...settings}>
//         //         {images.map((img, idx) => (
//         //             <div
//         //                 className={
//         //                     idx === imageIndex
//         //                         ? "opacity-100 transition-transform"
//         //                         : "scale-[0.75] opacity-75 transition-transform"
//         //                 }
//         //             >
//         //                 <img className="mx-auto w-full" src={img} alt={img} />
//         //             </div>
//         //         ))}
//         //     </Slider>
//         // </div>
//         <>
//             <div className="my-4 hidden sm:block">
//                 <Carousel
//                     infiniteLoop
//                     emulateTouch={true}
//                     centerMode={true}
//                     centerSlidePercentage={60}
//                     autoPlay={true}
//                     showArrows={false}
//                     showThumbs={false}
//                     showStatus={false}
//                     showIndicators={false}
//                 >
//                     <img className="px-4" src={banner1} alt="" />

//                     <img className="px-4" src={banner2} alt="" />

//                     <img className="px-4" src={banner3} alt="" />

//                     <img className="px-4" src={banner4} alt="" />

//                     <img className="px-4" src={banner5} alt="" />
//                 </Carousel>
//             </div>
//             <div className="my-4 sm:hidden">
//                 <Carousel
//                     infiniteLoop
//                     // centerMode={true}
//                     // centerSlidePercentage={60}
//                     autoPlay={true}
//                     showArrows={false}
//                     showThumbs={false}
//                     showStatus={false}
//                 >
//                     <img className="px-4" src={banner1} alt="" />

//                     <img className="px-4" src={banner2} alt="" />

//                     <img className="px-4" src={banner3} alt="" />

//                     <img className="px-4" src={banner4} alt="" />

//                     <img className="px-4" src={banner5} alt="" />
//                 </Carousel>
//             </div>
//         </>
//     );
// };

// export default Hero;
