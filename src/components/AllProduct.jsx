import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import AddProductCard from "./AddProductCard";
import ProductCard from "./ProductCard";

const AllProduct = () => {
    const dispatch = useDispatch();
    const { biodata } = useSelector((state) => state.auth);
    const { keyword, category, offset } = useSelector(
        (state) => state.products
    );
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts({ keyword, category, offset }));
    }, [keyword, category, offset, dispatch]);
    return (
        <>
            <AddProductCard />
            {products
                .filter((product) => product.seller_id === biodata.id)
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
                ))}
        </>
    );
};

export default AllProduct;
