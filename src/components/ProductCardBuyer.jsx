import { useNavigate } from "react-router-dom";

const ProductCardBuyer = ({ id, name, price, pictures }) => {
    const navigate = useNavigate();

    return (
        <div className="w-1/2 p-4 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div
                className="cursor-pointer space-y-2 rounded-md border border-neutral-200 p-2 shadow-md"
                key={id}
                onClick={() => {
                    navigate(`/buy-product/${id}`);
                }}
            >
                <img className="w-full" src={pictures} alt="" />
                <div>
                    <div className="truncate font-medium">{name}</div>
                    <div className="text-sm text-neutral-03">Aksesoris</div>
                </div>
                <div>{price}</div>
                <button className="flex h-12 w-full items-center justify-center rounded-xl bg-primary-purple-04 text-sm font-medium text-white ">
                    Beli
                </button>
            </div>
        </div>
    );
};

export default ProductCardBuyer;
