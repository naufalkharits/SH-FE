import { useEffect, useState } from "react"
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { logout } from "../../redux/authSlice"
import { fetchToken, onMessageListener } from "../../firebase/firebase"

const AuthRoutes = () => {
    const location = useLocation()
    const { productId } = useParams()
    const { user, decodedAccess } = useSelector((state) => state.auth)

    useEffect(() => {
        decodedAccess && fetchToken(decodedAccess?.id)
    }, [decodedAccess])

    // useEffect(() => {
    //     if (user) {
    //         isRefreshExp && dispatch(logout());
    //     }
    // }, [user, isRefreshExp, dispatch]);

    return user ? (
        location.pathname === `/manage-product/edit/${productId}` ? (
            location.state?.from?.pathname === `/product/${productId}` ? (
                <Outlet />
            ) : (
                <Navigate to="/404" replace />
            )
        ) : (
            <Outlet />
        )
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    )
}

export default AuthRoutes
