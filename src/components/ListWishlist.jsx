import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import ProductCardBuyer from "../components/ProductCardBuyer";

const ListWishlist = () => {
    const dispatch = useDispatch();
    const { keyword } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.products);
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts({ keyword, category }));
    }, [keyword, category, dispatch]);

    return (
        <>
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {products.map((product) => (
                        <ProductCardBuyer
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                            pictures={product.pictures[0]}
                        />
                        
                    ))}
                </div>
            </div>
        </>
    );
};

export default ListWishlist;
