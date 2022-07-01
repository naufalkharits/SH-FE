import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { logout, me, refresh } from "../redux/authSlice";

const RequireAuth = () => {
    const { productId } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const { user, checkMe, error } = useSelector((state) => state.auth);

    const decoded = jwtDecode(user.accessToken);

    useEffect(() => {
        if (user) dispatch(me(user.accessToken));
        if (checkMe === false) dispatch(refresh());
        if (error) dispatch(logout());
    }, [user, checkMe, error, dispatch]);

    return location.pathname === `/manage-product/edit/${productId}` ? (
        user && decoded.id === productId ? (
            <Outlet />
        ) : (
            <Navigate to="/manage-product" replace />
        )
    ) : user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default RequireAuth;
