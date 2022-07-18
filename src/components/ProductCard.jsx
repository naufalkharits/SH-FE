import { useLocation, useNavigate } from "react-router-dom"
import { priceFormatter } from "../utils/priceFormatter"

const ProductCard = ({ id, name, price, category, pictures }) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div
            className="cursor-pointer space-y-2 rounded-md p-2 shadow ring-1 ring-black ring-opacity-5 hover:shadow-md dark:shadow-zinc-800 dark:ring-white dark:ring-opacity-5 dark:hover:shadow-zinc-700"
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
                <div className="truncate font-medium dark:text-white">
                    {name}
                </div>
                <div className="text-sm text-neutral-03 dark:text-zinc-400">
                    {category}
                </div>
            </div>
            <div className="dark:text-white">{priceFormatter(price)}</div>
            {/* {location.pathname === "/wishlist" ||
                location.pathname === "/user" ? (
                    <button className="w-full rounded-2xl border border-primary-purple-04 p-2 font-medium hover:bg-primary-purple-05 hover:text-white ">
                        Beli
                    </button>
                ) : (
                    <></>
                )} */}
        </div>
    )
}

export default ProductCard
