import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Public = () => {
    const dispatch = useDispatch();
    const { user, isRefreshExp } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            isRefreshExp && dispatch(logout());
        }
    }, [user, isRefreshExp, dispatch]);

    return <Outlet />;
};

export default Public;
