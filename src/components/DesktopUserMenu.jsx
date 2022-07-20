import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { FiDollarSign, FiHeart, FiSettings } from "react-icons/fi"
import { classNameJoin } from "../utils/classNameJoin"

const DesktopUserMenu = () => {
    const location = useLocation()

    return (
        <div className="mt-4 hidden h-fit rounded-2xl p-6 shadow-md ring-1 ring-black ring-opacity-5 dark:text-white dark:shadow-zinc-800 dark:ring-white dark:ring-opacity-10 sm:block">
            <div className="mb-6 font-medium">Menu</div>
            <Link
                to="/user/wishlist"
                className={classNameJoin(
                    location.pathname === "/user/wishlist" &&
                        "text-primary-purple-04",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05 dark:hover:text-primary-purple-03"
                )}
            >
                <FiHeart />
                <span>List Keinginan</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02 dark:before:border-zinc-700 dark:after:border-zinc-700"></div>
            <Link
                to="/user/order-list"
                className={classNameJoin(
                    location.pathname === "/user/order-list" &&
                        "text-primary-purple-04",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05 dark:hover:text-primary-purple-03"
                )}
            >
                <FiDollarSign />
                <span>List Transaksi</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02 dark:before:border-zinc-700 dark:after:border-zinc-700"></div>
            <Link to="#" className="flex cursor-pointer items-center gap-2">
                <FiSettings />
                <span>Pengaturan</span>
            </Link>
        </div>
    )
}

export default DesktopUserMenu
