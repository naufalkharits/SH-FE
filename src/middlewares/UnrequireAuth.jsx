import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const UnrequireAuth = () => {
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        console.log(location);
        console.log(from);
    }, []);

    return user ? (
        <Navigate to={from} replace state={{ from: location }} />
    ) : (
        <Outlet />
    );
};

export default UnrequireAuth;
