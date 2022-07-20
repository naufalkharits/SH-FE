import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/authSlice"
import { fetchToken, onMessageListener } from "../../firebase/firebase"
import { setNotification, setShowNotification } from "../../redux/productsSlice"
import NotificationToast from "../../components/toasts/NotificationToast"

const PublicRoutes = () => {
    const dispatch = useDispatch()
    const { user, decodedAccess } = useSelector((state) => state.auth)

    useEffect(() => {
        decodedAccess && fetchToken(decodedAccess?.id)
    }, [decodedAccess])

    onMessageListener()
        .then((payload) => {
            dispatch(
                setNotification({
                    title: payload.notification.title,
                    body: payload.notification.body,
                })
            )
            dispatch(setShowNotification(true))
        })
        .catch((err) => console.log("failed"))

    // useEffect(() => {
    //     if (user) {
    //         isRefreshExp && dispatch(logout());
    //     }
    // }, [user, isRefreshExp, dispatch]);

    return (
        <>
            <NotificationToast />
            <Outlet />
        </>
    )
}

export default PublicRoutes
