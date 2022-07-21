import { useLocation, useNavigate } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FiDollarSign, FiHeart, FiSettings } from "react-icons/fi";

const MobileUserMenu = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const navigation = (link) => {
        navigate(link)
    }

    return (
        <div className="sm:hidden">
            <ScrollingCarousel leftIcon={false} rightIcon={false}>
                <div
                    onClick={() => navigation("/user/wishlist")}
                    className={
                        location.pathname === "/user/wishlist"
                            ? "flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white"
                            : "flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    }
                >
                    <FiHeart />
                    <span>List Keinginan</span>
                </div>
                <div
                    onClick={() => navigation("/user/order-list")}
                    className={
                        location.pathname === "/user/order-list"
                            ? "ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white"
                            : "ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    }
                >
                    <FiDollarSign />
                    <span>List Transaksi</span>
                </div>
                <div
                    to="#"
                    className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                >
                    <FiSettings />
                    <span>Pengaturan</span>
                </div>
            </ScrollingCarousel>
        </div>
    );
};

export default MobileUserMenu;
