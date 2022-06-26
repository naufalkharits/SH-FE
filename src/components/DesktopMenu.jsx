import { Link, useNavigate } from "react-router-dom";
import { FiList, FiLogIn } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import NotificationButton from "./NotificationButton";
import UserButton from "./UserButton";

const DesktopMenu = () => {
    const navigate = useNavigate();

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
                <Search />
            </div>
            <div className="flex items-center gap-6">
                <FiList
                    className="hidden h-6 w-6 cursor-pointer hover:text-primary-purple-05 sm:block"
                    onClick={() => {
                        navigate("/manage-product");
                    }}
                />
                <NotificationButton />
                <UserButton />
                <Link
                    to="/login"
                    className="hidden items-center gap-2 rounded-xl bg-primary-purple-04 py-3.5 px-4 font-semibold text-white  hover:bg-primary-purple-05 sm:flex"
                >
                    <FiLogIn className="h-5 w-5" />
                    <span>Masuk</span>
                </Link>
            </div>
        </>
    );
};

export default DesktopMenu;
