import { useEffect } from "react"
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { logout } from "../redux/authSlice"

const RequireAuth = () => {
    const location = useLocation()
    const { productId } = useParams()
    const { user } = useSelector((state) => state.auth)

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

export default RequireAuth
