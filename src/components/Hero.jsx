import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import banner1 from "../images/banner-1.png"
import banner2 from "../images/banner-2.png"
import banner3 from "../images/banner-3.png"
import banner4 from "../images/banner-4.png"
import banner5 from "../images/banner-5.png"

const Hero = () => {
    return (
        <Swiper
            className="my-8 hidden sm:block"
            modules={[Autoplay]}
            centeredSlides={true}
            slidesPerView={2}
            loop={true}
            grabCursor={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                {({ isActive }) => (
                    <img
                        className={
                            isActive ? "duration-700" : "scale-75 duration-700"
                        }
                        src={banner1}
                        alt=""
                    />
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <img
                        className={
                            isActive ? "duration-700" : "scale-75 duration-700"
                        }
                        src={banner2}
                        alt=""
                    />
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <img
                        className={
                            isActive ? "duration-700" : "scale-75 duration-700"
                        }
                        src={banner3}
                        alt=""
                    />
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <img
                        className={
                            isActive ? "duration-700" : "scale-75 duration-700"
                        }
                        src={banner4}
                        alt=""
                    />
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <img
                        className={
                            isActive ? "duration-700" : "scale-75 duration-700"
                        }
                        src={banner5}
                        alt=""
                    />
                )}
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero
