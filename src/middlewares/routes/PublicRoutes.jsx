import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/authSlice"
import { fetchToken } from "../../firebase/firebase"

const PublicRoutes = () => {
    const dispatch = useDispatch()
    const { user, decodedAccess } = useSelector((state) => state.auth)

    useEffect(() => {
        decodedAccess && fetchToken(decodedAccess?.id)
    }, [decodedAccess])

    // useEffect(() => {
    //     if (user) {
    //         isRefreshExp && dispatch(logout());
    //     }
    // }, [user, isRefreshExp, dispatch]);

    return <Outlet />
}

export default PublicRoutes
