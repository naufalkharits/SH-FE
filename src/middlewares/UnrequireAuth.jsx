import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const UnrequireAuth = () => {
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);

    return user ? (
        <Navigate to="/" state={{ from: location }} replace />
    ) : (
        <Outlet />
    );
};

export default UnrequireAuth;
