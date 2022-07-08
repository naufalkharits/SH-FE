import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { FiMinus, FiPlus } from "react-icons/fi";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const products = useSelector(productsSelectors.selectAll);
    const { keyword, offset, loading } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.categories);

    const limit = 10;

    useEffect(() => {
        if (
            Number(searchParams.get("page")) === 1 ||
            Number(searchParams.get("page")) <= 0
        )
            setSearchParams();
        dispatch(
            fetchProducts({
                keyword,
                category,
                offset: Number(searchParams.get("offset")),
            })
        );
    }, [searchParams, keyword, category, offset, dispatch]);

    return (
        <>
            <Hero />
            <div className="container mx-auto hidden p-4 sm:block">
                <Category />
            </div>
            {loading === "idle" && (
                <div className="container mx-auto flex items-center justify-center gap-4">
                    {/* {Number(searchParams.get("page")) >= 0 && ( */}
                    <button
                        className={
                            Number(searchParams.get("page")) === 1 ||
                            Number(searchParams.get("page")) <= 0
                                ? "text-gray"
                                : "rounded-md p-2 hover:bg-gray"
                        }
                        disabled={
                            Number(searchParams.get("page")) === 1 ||
                            Number(searchParams.get("page")) <= 0
                                ? true
                                : false
                        }
                        onClick={() => {
                            dispatch(setOffsetDecrement(10));
                            Number(searchParams.get("page")) === 2
                                ? setSearchParams()
                                : setSearchParams({
                                      page:
                                          Number(searchParams.get("page")) - 1,
                                      offset:
                                          Number(searchParams.get("offset")) -
                                          10,
                                  });
                        }}
                    >
                        <FiMinus className="h-5 w-5" />
                    </button>
                    {/* )} */}
                    <button
                        className={
                            products.length % limit === 0
                                ? "rounded-md p-2 hover:bg-gray"
                                : "text-gray"
                        }
                        disabled={products.length % limit === 0 ? false : true}
                        onClick={() => {
                            dispatch(setOffsetIncrement(10));
                            Number(searchParams.get("page")) === 0
                                ? setSearchParams({
                                      page: 2,
                                      offset: 10,
                                  })
                                : setSearchParams({
                                      page:
                                          Number(searchParams.get("page")) + 1,
                                      offset:
                                          Number(searchParams.get("offset")) +
                                          10,
                                  });
                        }}
                    >
                        <FiPlus className="h-5 w-5" />
                    </button>
                </div>
            )}
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    <>
                        {loading === "pending" ? (
                            <ProductSkeleton />
                        ) : (
                            products.map((product) => (
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
                            ))
                        )}
                    </>
                </div>
            </div>
            <SellButton />
        </>
    );
};

export default Home;
