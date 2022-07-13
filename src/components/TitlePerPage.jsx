import { useLocation } from "react-router-dom";

const TitlePerPage = () => {
    const location = useLocation();

    return (
        <h1 className="text-xl font-bold sm:hidden">
            {location.pathname.includes("/notification") && "Notifikasi"}
            {location.pathname.includes("/manage-product") &&
                "Daftar Jual Saya"}
        </h1>
    );
};

export default TitlePerPage;
