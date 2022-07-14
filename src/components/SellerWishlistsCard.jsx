import { useNavigate } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import IDR from "../utils/IDR"

const SellerWishlistsCard = ({
    id,
    name,
    price,
    category,
    pictures,
    count,
}) => {
    const navigate = useNavigate()

    return (
        <div
            className="cursor-pointer space-y-2 rounded-md p-2 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10"
            onClick={() => {
                navigate(`/product/${id}`)
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
                <IDR price={price} />
            </div>
            <div className="flex items-center">
                <p className="mr-2 text-sm">
                    {" "}
                    <FaHeart />{" "}
                </p>
                <p className="text-sm">{count}</p>
            </div>
        </div>
    )
}

export default SellerWishlistsCard
