import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistBuyer } from "../redux/wishlistSlice";
import ProductCard from "../components/ProductCard";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const WishlistUser = () => {
    const dispatch = useDispatch();
    const { wishlists } = useSelector((state) => state.wishlist);

    useEffect(() => {
        dispatch(getWishlistBuyer());
    }, [dispatch]);

    return (
        <>
            <div className="w-full px-5 space-y-2 mt-4">
                <p className="font-medium">List Wishlist User</p>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={4}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {wishlists?.map((wishlist) => (
                        <SwiperSlide className="flex justify-center items-center">
                            <div className="w-4/5 my-4">
                                <ProductCard
                                    key={wishlist.product.id}
                                    id={wishlist.product.id}
                                    name={wishlist.product.name}
                                    price={wishlist.product.price}
                                    category={wishlist.product.category}
                                    pictures={wishlist.product.pictures[0]}
                                />
                            </div>
                        </SwiperSlide>
                    )
                    )}
                </Swiper>
            </div>
        </>
    );
};

export default WishlistUser;
