import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { refresh, logout } from "../redux/authSlice";

const RequireAuth = () => {
    const { productId } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const { user, decodedAccess, decodedRefresh } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user) {
            const accessExp = decodedAccess.exp * 1000 - 30 * 1000;
            const refreshExp = decodedRefresh.exp * 1000 - 60 * 1000;

            Date.now() > new Date(accessExp) && dispatch(refresh());
            Date.now() > new Date(refreshExp) && dispatch(logout());
        }
    }, [user, decodedAccess, decodedRefresh, dispatch]);

    return user ? (
        // location.pathname === `/manage-product/edit/${productId}` ? (
        //     decodedAccess.id === productId ? (
        //         <Outlet />
        //     ) : (
        //         <Navigate to="/manage-product" replace />
        //     )
        // ) : (
        <Outlet />
    ) : (
        // )
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default RequireAuth;
