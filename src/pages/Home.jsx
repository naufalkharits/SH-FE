import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import CategoryBuyer from "../components/CategoryBuyer";
import Hero from "../components/Hero";
import JualButton from "../components/JualButton";
import ProductCard from "../components/ProductCard";
import ProductCardTesting from "../components/ProductCard-testing";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <Hero />
            <div className="container mx-auto p-4">
                <CategoryBuyer />
            </div>
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {products.map((product) => (
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
            <JualButton />
        </>
    );
};

export default Home;
