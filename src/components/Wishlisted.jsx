import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getWishlistSeller } from "../redux/wishlistSlice"
import SellerWishlistsCard from "./SellerWishlistsCard"
import WishlistSkeleton from "./skeletons/WishlistSkeleton"
import Wishlisted404 from "./unfound/Wishlisted404"

const Wishlisted = () => {
    const dispatch = useDispatch()
    const { sellerwishlists, loading } = useSelector((state) => state.wishlist)

    useEffect(() => {
        dispatch(getWishlistSeller({ as: "seller" }))
    }, [dispatch])

    const result =
        sellerwishlists &&
        Object.values(
            sellerwishlists?.reduce((jumlah, wishlist) => {
                let check = `${wishlist.product.id}`
                if (!jumlah[check]) jumlah[check] = { ...wishlist, count: 1 }
                else jumlah[check].count += 1
                return jumlah
            }, {})
        )

    return (
        <div className="w-full space-y-2 sm:pl-5">
            <div className="flex flex-wrap">
                {loading === "pending" ? (
                    <WishlistSkeleton />
                ) : sellerwishlists?.length === 0 ? (
                    <div className="my-16 w-full">
                        <Wishlisted404 />
                    </div>
                ) : (
                    result?.map((sellwish, id) => (
                        <div className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4" key={id}>
                            <SellerWishlistsCard
                                id={sellwish.product.id}
                                name={sellwish.product.name}
                                price={sellwish.product.price}
                                category={sellwish.product.category}
                                pictures={sellwish.product.pictures[0]}
                                count={sellwish.count}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Wishlisted
