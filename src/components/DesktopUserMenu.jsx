import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiDollarSign, FiHeart, FiSettings } from "react-icons/fi";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const DesktopUserMenu = () => {
    const location = useLocation();

    return (
        <div className="mt-4 hidden h-fit rounded-2xl border border-neutral-200 p-6 shadow-md sm:block">
            {/* <div className="mb-6 font-medium">Menu</div> */}
            <Link
                to="/order-list"
                className={className(
                    location.pathname === "/order-list"
                        ? "text-primary-purple-04"
                        : "",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05"
                )}
            >
                <FiDollarSign />
                <span>List Transaksi</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02"></div>
            <Link
                to="/wishlist"
                className={className(
                    location.pathname === "/wishlist"
                        ? "text-primary-purple-04"
                        : "",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05"
                )}
            >
                <FiHeart />
                <span>List Keinginan</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02"></div>
            <Link to="#" className="flex cursor-pointer items-center gap-2">
                <FiSettings />
                <span>Pengaturan</span>
            </Link>
        </div>
    );
};

export default DesktopUserMenu;
