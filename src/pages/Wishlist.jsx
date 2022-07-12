import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistBuyer } from "../redux/wishlistSlice";
import ProductCard from "../components/ProductCard";
import WishlistSkeleton from "../components/skeletons/WishlistSkeleton";

const Wishlist = () => {
    const dispatch = useDispatch();
    const { wishlists, loading } = useSelector((state) => state.wishlist);

    useEffect(() => {
        dispatch(getWishlistBuyer());
    }, [dispatch]);

    return (
        <div className="w-full px-5 space-y-2 mt-4">
            <p className="font-medium">List Wishlist User</p>
            <div className="-m-4 flex flex-wrap">
                { loading === "pending" ? (
                    <WishlistSkeleton />
                ) :
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
                }
                )}
            </div>
        </div>
    );
};

export default Wishlist;
