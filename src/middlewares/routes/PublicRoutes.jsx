import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { onMessage } from "firebase/messaging"
import { fetchToken, messaging } from "../../firebase/firebase"
import { setNotification, setShowNotification } from "../../redux/productsSlice"
import NotificationToast from "../../components/toasts/NotificationToast"

const PublicRoutes = () => {
    const dispatch = useDispatch()
    const { decodedAccess } = useSelector((state) => state.auth)

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
            <Outlet />
        </>
    )
}

export default PublicRoutes
