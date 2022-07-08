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
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams({ page: 0 });
    const { keyword, offset, loading } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.categories);

    const products = useSelector(productsSelectors.selectAll);

    const limit = 10;

    useEffect(() => {
        console.log(Number(searchParams.get("page")));
        dispatch(fetchProducts({ keyword, category, offset }));
    }, [searchParams, keyword, category, offset, dispatch]);

    return (
        <>
            <Hero />
            <div className="container mx-auto hidden p-4 sm:block">
                <Category />
            </div>
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
                {loading === "idle" && (
                    <div className="flex items-center">
                        {Number(searchParams.get("page")) !== 0 && (
                            <FiMinus
                                className="h-8 w-8 cursor-pointer rounded-md p-2 hover:bg-gray"
                                onClick={() => {
                                    dispatch(setOffsetDecrement(10));
                                    Number(searchParams.get("page")) === 2
                                        ? setSearchParams()
                                        : setSearchParams({
                                              page:
                                                  Number(
                                                      searchParams.get("page")
                                                  ) - 1,
                                          });
                                }}
                            />
                        )}
                        {products.length % limit === 0 && (
                            <FiPlus
                                className="h-8 w-8 cursor-pointer rounded-md p-2 hover:bg-gray"
                                onClick={() => {
                                    dispatch(setOffsetIncrement(10));
                                    Number(searchParams.get("page")) === 0
                                        ? setSearchParams({
                                              page: 2,
                                          })
                                        : setSearchParams({
                                              page:
                                                  Number(
                                                      searchParams.get("page")
                                                  ) + 1,
                                          });
                                }}
                            />
                        )}
                    </div>
                )}
            </div>
            <SellButton />
        </>
    );
};

export default Home;
