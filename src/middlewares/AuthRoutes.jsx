import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const RequireAuth = () => {
    const { productId } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const { user, decodedRefresh } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            const refreshExp = decodedRefresh.exp * 1000 - 60 * 1000;
            Date.now() > new Date(refreshExp) && dispatch(logout());
        }
    }, [user, decodedRefresh, dispatch]);

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
