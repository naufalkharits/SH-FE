import { Link, useLocation } from "react-router-dom"
import { FiBox, FiDollarSign, FiHeart } from "react-icons/fi"
import { classNameJoin } from "../utils/classNameJoin"

const CategorySellerCard = () => {
    const location = useLocation()

    return (
        <div className="mt-4 hidden h-fit rounded-2xl p-6 shadow-md ring-1 ring-black ring-opacity-5 dark:text-white dark:shadow-zinc-800 dark:ring-white dark:ring-opacity-10 sm:block">
            <div className="mb-6 font-medium">Kategori</div>
            <Link
                to="/manage-product"
                className={classNameJoin(
                    location.pathname === "/manage-product" &&
                        "text-primary-purple-04",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05 dark:hover:text-primary-purple-03"
                )}
            >
                <FiBox />
                <span>Semua Produk</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02 dark:before:border-zinc-700 dark:after:border-zinc-700"></div>
            <Link
                to="wishlisted"
                className={classNameJoin(
                    location.pathname === "/manage-product/wishlisted" &&
                        "text-primary-purple-04",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05 dark:hover:text-primary-purple-03"
                )}
            >
                <FiHeart />
                <span>Diminati</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02 dark:before:border-zinc-700 dark:after:border-zinc-700"></div>
            <Link
                to="sold"
                className={classNameJoin(
                    location.pathname === "/manage-product/sold" &&
                        "text-primary-purple-04",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05 dark:hover:text-primary-purple-03"
                )}
            >
                <FiDollarSign />
                <span>Terjual</span>
            </Link>
        </div>
    )
}

export default CategorySellerCard
