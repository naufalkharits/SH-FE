import { Link, useLocation } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FiDollarSign, FiHeart, FiSettings } from "react-icons/fi";

const MobileUserMenu = () => {
    const location = useLocation();

    return (
        <div className="sm:hidden">
            <ScrollingCarousel leftIcon={false} rightIcon={false}>
                <Link
                    to="/order-list"
                    className={
                        location.pathname === "/order-list"
                            ? "flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white"
                            : "flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    }
                >
                    <FiDollarSign />
                    <span>Daftar Transaksi</span>
                </Link>
                <Link
                    to="/wishlist"
                    className={
                        location.pathname === "/wishlist"
                            ? "ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white"
                            : "ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    }
                >
                    <FiHeart />
                    <span>Diminati</span>
                </Link>
                <Link
                    to="#"
                    className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                >
                    <FiSettings />
                    <span>Pengaturan Akun</span>
                </Link>
            </ScrollingCarousel>
        </div>
    );
};

export default MobileUserMenu;
