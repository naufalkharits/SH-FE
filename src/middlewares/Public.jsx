import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, me, refresh } from "../redux/authSlice";

const Public = () => {
    const dispatch = useDispatch();
    const { user, checkMe, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) dispatch(me(user.accessToken.token));
        if (checkMe === false) dispatch(refresh());
        if (error) dispatch(logout());
    }, [user, checkMe, error, dispatch]);

    return <Outlet />;
};

export default Public;
