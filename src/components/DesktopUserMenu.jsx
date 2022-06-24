import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiDollarSign, FiHeart, FiSettings } from "react-icons/fi";

const DesktopUserMenu = () => {
    const location = useLocation();

    return (
        <div className="mt-4 hidden h-fit rounded-2xl border border-neutral-200 p-6 shadow-md sm:block">
            {/* <div className="mb-6 font-medium">Menu</div> */}
            <Link
                to="/order-list"
                className={
                    location.pathname === "/order-list"
                        ? "flex cursor-pointer items-center gap-2 text-primary-purple-04"
                        : "flex cursor-pointer items-center gap-2"
                }
            >
                <FiDollarSign />
                <span>Daftar Transaksi</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02"></div>
            <Link
                to="/wishlist"
                className={
                    location.pathname === "/wishlist"
                        ? "flex cursor-pointer items-center gap-2 text-primary-purple-04"
                        : "flex cursor-pointer items-center gap-2"
                }
            >
                <FiHeart />
                <span>Diminati</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02"></div>
            <Link to="#" className="flex cursor-pointer items-center gap-2">
                <FiSettings />
                <span>Pengaturan Akun</span>
            </Link>
        </div>
    );
};

export default DesktopUserMenu;
