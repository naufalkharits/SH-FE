import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refresh, logout } from "../redux/authSlice";

const Public = () => {
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

    return <Outlet />;
};

export default Public;
