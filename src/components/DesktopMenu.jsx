import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiList, FiLogIn } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import NotificationButton from "./NotificationButton";
import UserButton from "./UserButton";
import SellerButton from "./SellerButton";

const DesktopMenu = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    return (
        <>
            <div className="flex items-center gap-8">
                <img
                    className="hidden h-8 cursor-pointer sm:inline"
                    src="/img/logo1.png"
                    alt=""
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <MobileMenu />
                <div className="hidden sm:block">
                    <Search />
                </div>
            </div>
            <div className="w-full sm:hidden">
                <Search />
            </div>
            <div className="hidden items-center gap-6 sm:flex">
                {user ? (
                    <>
                        <SellerButton />
                        <NotificationButton />
                        <UserButton />
                    </>
                ) : (
                    <Link
                        to="/login"
                        className="flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3.5 px-4 font-semibold  text-white hover:bg-primary-purple-05"
                    >
                        <FiLogIn className="h-5 w-5" />
                        <span>Masuk</span>
                    </Link>
                )}
            </div>
        </>
    );
};

export default DesktopMenu;
