import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import Search from "./Search";

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
            <div className="hidden items-center gap-4 font-semibold sm:flex">
                <button className="flex w-full items-center gap-2 rounded-xl bg-primary-purple-04 py-2 px-4  font-semibold text-neutral-01">
                    <FiLogIn className="h-5 w-5" />
                    <span>Masuk</span>
                </button>
            </div>
        </>
    );
};

export default DesktopMenu;
