import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProduct } from "../redux/productsSlice";
import AddProductButton from "./buttons/AddProductButton";
import ProductCard from "./ProductCard";
import Product404 from "../unfound/Product404";
import SellerSkeleton from "./skeletons/SellerSkeleton";

const AllProduct = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.auth);
    const { filteredProduct, loading } = useSelector((state) => state.products);

    const [id, setId] = useState(null);

    useEffect(() => {
        profile && setId(profile.id);
        id && dispatch(getFilteredProduct(id));
    }, [profile, id, dispatch]);

    return (
        <>
            {profile && (
                <>
                    {loading === "pending" ? (
                        <SellerSkeleton />
                    ) : (
                        filteredProduct && (
                            <>
                                {filteredProduct.length === 0 ? (
                                    <AddProductButton height={"h-32"} />
                                ) : (
                                    <AddProductButton height={"h-full"} />
                                )}
                                <>
                                    {filteredProduct.length === 0 ? (
                                        <div className="p-4">
                                            <Product404 />
                                        </div>
                                    ) : (
                                        filteredProduct.map((product) => (
                                            <div
                                                className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4"
                                                key={product.id}
                                            >
                                                <ProductCard
                                                    id={product.id}
                                                    name={product.name}
                                                    price={product.price}
                                                    category={product.category}
                                                    pictures={
                                                        product.pictures[0]
                                                    }
                                                />
                                            </div>
                                        ))
                                    )}
                                </>
                            </>
                        )
                    )}
                </>
            )}
        </>
    );
};

export default AllProduct;
