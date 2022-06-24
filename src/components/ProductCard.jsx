import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price, category, pictures }) => {
    const navigate = useNavigate();

    return (
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
            <div>{price}</div>
        </div>
    );
};

export default ProductCard;
