import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SellButton from "../components/buttons/SellButton";
import Category from "../components/Category";
// import ProductCardTesting from "../components/ProductCard-testing";

const Home = () => {
    const dispatch = useDispatch();
    const { keyword } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.products);
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts({ keyword, category }));
    }, [keyword, category, dispatch]);

    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(10);

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            </div>
            <SellButton />
        </>
    );
};

export default Home;
