import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Public = () => {
    const dispatch = useDispatch();
    const { user, decodedRefresh } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            const refreshExp = decodedRefresh.exp * 1000 - 60 * 1000;
            Date.now() > new Date(refreshExp) && dispatch(logout());
        }
    }, [user, decodedRefresh, dispatch]);

    return <Outlet />;
};

export default Public;
