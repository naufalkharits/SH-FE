import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, me, refresh } from "../redux/authSlice";

const RequireAuth = () => {
    const { productId } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const { user, decodedAccess, checkMe, error } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user) dispatch(me(user.accessToken.token));
        if (checkMe === false) dispatch(refresh());
        if (error) dispatch(logout());
    }, [user, checkMe, error, dispatch]);

    return user ? (
        location.pathname === `/manage-product/edit/${productId}` ? (
            decodedAccess.id === productId ? (
                <Outlet />
            ) : (
                <Navigate to="/manage-product" replace />
            )
        ) : (
            <Outlet />
        )
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default RequireAuth;
