import { FiArrowLeft } from "react-icons/fi";
import {useNavigate, Outlet, useLocation } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate()
    const location = useLocation();

    return (
        <>
            <nav className="flex bg-white shadow h-[84px] items-center">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <img
                        className="hidden h-8 cursor-pointer sm:inline"
                        src="/img/logo1.png"
                        alt=""
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <FiArrowLeft className="h-6 w-6 cursor-pointer sm:hidden"/>
                    <div className="font-normal">{location.pathname === '/user/infopenawar' ? "Info Penawar" : ""}</div>
                    <div className="h-6 w-6 sm:w-[99px]"></div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Topbar