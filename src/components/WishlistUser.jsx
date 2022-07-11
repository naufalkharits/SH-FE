import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productsSelectors } from "../redux/productsSlice";
import { getWishlistBuyer } from "../redux/wishlistSlice";
import ProductCard from "../components/ProductCard";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const WishlistUser = () => {
    const dispatch = useDispatch();
    const { wishlists } = useSelector((state) => state.wishlist);
    const { keyword, category, offset } = useSelector(
        (state) => state.products
    );
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(getProducts({ keyword, category, offset }));
        dispatch(getWishlistBuyer());
    }, [keyword, category, offset, dispatch]);

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
                    {wishlists?.map((wishlist) =>
                        products
                            .filter(
                                (product) => product.id === wishlist?.product_id
                            )
                            .map((product) => (
                                <SwiperSlide className="flex justify-center items-center">
                                    <div className="w-4/5 my-4">
                                        <ProductCard
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            price={product.price}
                                            category={product.category}
                                            pictures={product.pictures[0]}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))
                    )}
                </Swiper>
            </div>
        </>
    );
};

export default WishlistUser;
