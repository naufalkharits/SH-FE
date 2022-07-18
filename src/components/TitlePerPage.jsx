import { useLocation } from "react-router-dom"

const TitlePerPage = () => {
    const location = useLocation()

    return (
        <h1 className="text-xl font-bold sm:hidden dark:text-white">
            {location.pathname.includes("/user") && "Akun Saya"}
            {location.pathname.includes("/notification") && "Notifikasi"}
            {location.pathname.includes("/manage-product") && "Toko Saya"}
        </h1>
    )
}

export default TitlePerPage
