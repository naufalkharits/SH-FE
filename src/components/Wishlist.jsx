import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWishlistBuyer } from "../redux/wishlistSlice"
import ProductCard from "./ProductCard"
import WishlistSkeleton from "./skeletons/WishlistSkeleton"
import MyWishlist404 from "./unfound/MyWishlist404"

const Wishlist = () => {
    const dispatch = useDispatch()
    const { wishlists, loading } = useSelector((state) => state.wishlist)

    useEffect(() => {
        dispatch(getWishlistBuyer())
    }, [dispatch])

    return (
        <div className="mt-4 w-full space-y-2 sm:pl-10 sm:pr-0">
            <p className="ml-4 font-medium dark:text-white sm:ml-0">
                List Wishlist User
            </p>
            <div className="flex flex-wrap sm:-ml-4">
                {loading === "pending" ? (
                    <WishlistSkeleton />
                ) : wishlists?.length === 0 ? (
                    <div className="my-16 w-full">
                        <MyWishlist404 />
                    </div>
                ) : (
                    wishlists?.map((wishlist) => {
                        return (
                            <div
                                className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4"
                                key={wishlist.product.id}
                            >
                                <ProductCard
                                    id={wishlist.product.id}
                                    name={wishlist.product.name}
                                    price={wishlist.product.price}
                                    category={wishlist.product.category}
                                    pictures={wishlist.product.pictures[0]}
                                />
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Wishlist
