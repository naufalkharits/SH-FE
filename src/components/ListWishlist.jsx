import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/productsSlice";
import ProductCardBuyer from "../components/ProductCardBuyer";
const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {products.map((product) => (
                        <ProductCardBuyer
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            pictures={product.pictures[0]}
                        />
                        
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
