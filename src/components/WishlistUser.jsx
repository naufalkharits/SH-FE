import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { getWishlistBuyer } from "../redux/wishlistSlice"
import ProductCard from "../components/ProductCard"
import WishlistProfileSkeleton from "./skeletons/WishlistProfileSkeleton"
import MyWishlist404 from "./unfound/MyWishlist404"

const WishlistUser = () => {
    const dispatch = useDispatch()
    const { wishlists, loading } = useSelector((state) => state.wishlist)

    useEffect(() => {
        dispatch(getWishlistBuyer())
    }, [dispatch])

    return (
        <>
            <div className="mt-4 w-full space-y-2 px-5 sm:pl-10">
                <p className="font-medium dark:text-white">
                    List Wishlist User
                </p>
                <div className="flex">
                    {loading === "pending" ? (
                        <WishlistProfileSkeleton />
                    ) : wishlists?.length === 0 ? (
                        <div className="my-16 w-full">
                            <MyWishlist404 />
                        </div>
                    ) : (
                        <Swiper
                            className="w-full"
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                                1536: {
                                    slidesPerView: 4,
                                    spaceBetween: 25,
                                },
                            }}
                        >
                            {wishlists?.map((wishlist) => (
                                <SwiperSlide
                                    key={wishlist.product.id}
                                    className="py-4"
                                >
                                    <ProductCard
                                        id={wishlist.product.id}
                                        name={wishlist.product.name}
                                        price={wishlist.product.price}
                                        category={wishlist.product.category}
                                        pictures={wishlist.product.pictures[0]}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </>
    )
}

export default WishlistUser
