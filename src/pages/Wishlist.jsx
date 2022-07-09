import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productsSelectors } from "../redux/productsSlice";
import { getWishlistBuyer } from "../redux/wishlistSlice";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
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
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {wishlists?.map((wishlist) =>
                        products
                            .filter(
                                (product) => product.id === wishlist?.product_id
                            )
                            .map((product) => (
                                <div
                                    className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4"
                                    key={product.id}
                                >
                                    <ProductCard
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        category={product.category}
                                        pictures={product.pictures[0]}
                                    />
                                </div>
                            ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Wishlist;
