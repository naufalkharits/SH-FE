import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import AddProductCard from "./AddProductCard";
import ProductCard from "./ProductCard";

const AllProduct = () => {
    const dispatch = useDispatch();
    const { keyword } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.products);
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts({ keyword, category }));
    }, [keyword, category, dispatch]);
    return (
        <>
            <AddProductCard />
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    pictures={product.pictures[0]}
                />
            ))}
        </>
    );
};

export default AllProduct;
