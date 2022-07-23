import { useEffect } from "react"
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { onMessage } from "firebase/messaging"
import { fetchToken, messaging } from "../../firebase/firebase"
import { setNotification, setShowNotification } from "../../redux/productsSlice"
import NotificationToast from "../../components/toasts/NotificationToast"

const AuthRoutes = () => {
    const location = useLocation()
    const { productId } = useParams()
    const dispatch = useDispatch()
    const { user, decodedAccess } = useSelector((state) => state.auth)

    useEffect(() => {
        decodedAccess && fetchToken(decodedAccess?.id)
    }, [decodedAccess])

    onMessage(messaging, (payload) => {
        dispatch(
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
            })
        )
        dispatch(setShowNotification(true))
    })

    return (
        <>
            <NotificationToast />
            {user ? (
                location.pathname === `/manage-product/edit/${productId}` ? (
                    location.state?.from?.pathname ===
                    `/product/${productId}` ? (
                        <Outlet />
                    ) : (
                        <Navigate to="/404" replace />
                    )
                ) : (
                    <Outlet />
                )
            ) : (
                <Navigate to="/login" replace state={{ from: location }} />
            )}
        </>
    )
}

export default AuthRoutes
