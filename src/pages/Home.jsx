import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProducts,
    productsSelectors,
    setOffsetDecrement,
    setOffsetIncrement,
} from "../redux/productsSlice";
import Hero from "../components/Hero";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import SellButton from "../components/buttons/SellButton";

const Home = () => {
    const dispatch = useDispatch();
    const { keyword, category, offset } = useSelector(
        (state) => state.products
    );

    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts({ keyword, category, offset }));
    }, [keyword, category, offset, dispatch]);

    return (
        <>
            <Hero />
            <div className="container mx-auto hidden p-4 sm:block">
                <Category />
            </div>
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {products
                        // .filter((product) => product.name.includes(keyword))
                        .map((product) => (
                            <div
                                className="w-1/2 p-4 md:w-1/3 lg:w-1/4 xl:w-1/5"
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
                </div>
                {offset > 0 && (
                    <button
                        onClick={() => {
                            dispatch(setOffsetDecrement(10));
                        }}
                    >
                        {" "}
                        -{" "}
                    </button>
                )}
                <button
                    onClick={() => {
                        dispatch(setOffsetIncrement(10));
                    }}
                >
                    {" "}
                    +{" "}
                </button>
                {/* <button
                    onClick={() => {
                        dispatch(setOffsetIncrement(4));
                    }}
                >
                    {" "}
                    4{" "}
                </button> */}
            </div>
            <SellButton />
        </>
    );
};

export default Home;
