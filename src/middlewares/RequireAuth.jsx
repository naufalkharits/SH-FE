import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { me, refresh } from "../redux/authSlice";

const RequireAuth = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { checkMe } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(me(user.accessToken));
        if (!checkMe) dispatch(refresh());
    }, [user, checkMe, dispatch]);

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default RequireAuth;
