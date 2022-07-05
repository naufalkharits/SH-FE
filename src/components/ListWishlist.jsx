import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import ProductCardBuyer from "../components/ProductCardBuyer";
import { getWishlistBuyer } from "../redux/wishlistSlice";

const ListWishlist = () => {
    const dispatch = useDispatch();
    const { wishlists } = useSelector((state) => state.wishlist);
    const { keyword, category, offset } = useSelector(
        (state) => state.products
    );
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts({ keyword, category, offset }));
        dispatch(getWishlistBuyer());
    }, [keyword, category, offset, dispatch]);

    return (
        <>
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {wishlists?.map((wishlist) => (
                        products.filter((product) => product.id === wishlist?.product_id)
                            .map((product) => (
                                <ProductCardBuyer
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    category={product.category}
                                    pictures={product.pictures[0]}
                                />
                            ))
                    ))}
                </div>
            </div>
        </>
    );
};

export default ListWishlist;
