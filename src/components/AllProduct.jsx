import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProduct } from "../redux/productsSlice";
import AddProductCard from "./AddProductCard";
import ProductCard from "./ProductCard";

const AllProduct = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.auth);
    const { filteredProduct } = useSelector((state) => state.products);

    const [id, setId] = useState(null);

    useEffect(() => {
        profile && setId(profile.id);
        id && dispatch(getFilteredProduct(id));
    }, [profile, id, dispatch]);

    return (
        <>
            <AddProductCard />
            {filteredProduct?.map((product) => (
                <div className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4" key={product.id}>
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
