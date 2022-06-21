import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import AddProductCard from "./AddProductCard";
import ProductCard from "./ProductCard";

const AllProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
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
