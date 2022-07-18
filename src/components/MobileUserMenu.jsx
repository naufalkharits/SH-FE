import { Link, useLocation } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FiDollarSign, FiHeart, FiSettings } from "react-icons/fi";

const MobileUserMenu = () => {
    const location = useLocation();

    return (
        <div className="sm:hidden">
            <ScrollingCarousel leftIcon={false} rightIcon={false}>
                <Link
                    to="/user/wishlist"
                    className={
                        location.pathname === "/user/wishlist"
                            ? "flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white"
                            : "flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    }
                >
                    <FiHeart />
                    <span>List Keinginan</span>
                </Link>
                <Link
                    to="/user/order-list"
                    className={
                        location.pathname === "/user/order-list"
                            ? "ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white"
                            : "ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    }
                >
                    <FiDollarSign />
                    <span>List Transaksi</span>
                </Link>
                <Link
                    to="#"
                    className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                >
                    <FiSettings />
                    <span>Pengaturan</span>
                </Link>
            </ScrollingCarousel>
        </div>
    );
};

export default MobileUserMenu;
