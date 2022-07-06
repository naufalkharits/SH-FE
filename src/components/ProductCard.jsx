import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import ProductSkeleton from "./skeletons/ProductSkeleton";

const ProductCard = ({ id, name, price, category, pictures }) => {
    const navigate = useNavigate();
     const {  loading } = useSelector(
        (state) => state.products
    );

    return (
        <>
        {/* {loading === "pending" ? (
            <ProductSkeleton />
        ) : ( */}
            <>
        <div
            className="cursor-pointer space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10"
            onClick={() => {
                navigate(`/product/${id}`);
            }}
        >
            <img
                className="h-48 w-full rounded object-cover object-center"
                src={pictures}
                alt=""
            />
            <div>
                <div className="truncate font-medium">{name}</div>
                <div className="text-sm text-neutral-03">{category}</div>
            </div>
            <div>
                Rp {price.toLocaleString('id-ID')}
            </div>
        </div>
        </>
        {/* )} */}
        </>
    );
};

export default ProductCard;
