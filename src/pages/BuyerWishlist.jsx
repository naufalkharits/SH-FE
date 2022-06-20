import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import CategoryBuyerCard from "../components/CategorySellerCard";
import ProfileCard from "../components/ProfileCard";
// import CategoryBuyer from "../components/CategoryBuyer";
import ListWishlist from "../components/ListWishlist"

const ManageProduct = () => {
    const dispatch = useDispatch();
    // const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="container mx-auto p-4">
            <div className="mb-4 space-y-6 sm:mb-2">
                <div className="text-xl font-bold">Wishlist</div>
                <ProfileCard />
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                    <CategoryBuyerCard />
                    {/* <CategoryBuyer /> */}
                </div>
                <div className="flex flex-wrap sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6">
                 <ListWishlist />
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
