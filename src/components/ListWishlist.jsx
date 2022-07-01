import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import ProductCardBuyer from "../components/ProductCardBuyer";
import { getWishlistBuyer } from "../redux/wishlistSlice";

const ListWishlist = () => {
    // const dispatch = useDispatch();
    // const { wishlists } = useSelector((state) => state.wishlist);

    // useEffect(() => {
    //     dispatch(getWishlistBuyer());
    // }, [dispatch]);

    return (
        <>
            {/* <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {wishlists?.map((wishlist) => (
                        <div className="p-5" key={wishlist?.id}>{wishlist?.product_id}</div>                    
                    ))}
                </div>
            </div> */}
        </>
    );
};

export default ListWishlist;
