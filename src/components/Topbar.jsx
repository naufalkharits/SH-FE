import { FiArrowLeft } from "react-icons/fi"
import { useNavigate, Outlet, useLocation, useParams } from "react-router-dom"
import SecondHand from "../images/SecondHand.png"

const Topbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { productId } = useParams()

    return (
        <>
            <nav className="flex h-[84px] items-center bg-white sm:shadow">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <img
                        className="hidden h-8 cursor-pointer sm:inline"
                        src={SecondHand}
                        alt=""
                        onClick={() => {
                            navigate(
                                "/",
                                location.pathname === "/" && { replace: true }
                            )
                        }}
                    />

                    <FiArrowLeft
                        className="h-6 w-6 cursor-pointer sm:hidden"
                        onClick={() => {
                            navigate(-1)
                        }}
                    />
                    <div className="font-medium">
                        {location.pathname === "/user/infopenawar"
                            ? "Info Penawar"
                            : location.pathname === "/user/profile"
                            ? "Lengkapi Info Akun"
                            : location.pathname === "/manage-product/add"
                            ? "Lengkapi Detail Produk"
                            : location.pathname ===
                              `/manage-product/edit/${productId}`
                            ? "Edit Detail Produk"
                            : ""}
                    </div>
                    <div className="h-6 w-6 sm:w-[69.56px]"></div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Topbar
