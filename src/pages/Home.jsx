import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SellButton from "../components/SellButton";
import Category from "../components/Category";
// import ProductCardTesting from "../components/ProductCard-testing";

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
                <Category />
            </div>
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
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
                </div>
            </div>
            <SellButton />
        </>
    );
};

export default Home;
