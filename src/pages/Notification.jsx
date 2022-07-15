import { useSelector } from "react-redux"
import { notificationSelectors } from "../redux/notificationSlice"
import NotificationSkeleton from "../components/skeletons/NotificationSkeleton"
import NewProduct from "../components/notifications/NewProduct"
import ProductTransaction from "../components/notifications/ProductTransaction"

const Notification = () => {
    const notification = useSelector(notificationSelectors.selectAll)
    const { loading } = useSelector((state) => state.notification)

    return (
        <>
            <div className="container mx-auto p-4 sm:space-y-6 sm:px-16 md:px-32 lg:px-48 xl:px-64 2xl:px-80 3xl:px-96">
                <h1 className="hidden text-xl font-bold sm:block">
                    Notifikasi
                </h1>
                {loading === "pending" ? (
                    <div className="divide-y divide-neutral-200">
                        <NotificationSkeleton />
                    </div>
                ) : (
                    <div className="divide-y divide-neutral-200">
                        {notification?.map((notif) =>
                            notif?.type === "NEW_PRODUCT" ? (
                                <NewProduct key={notif?.id} notif={notif} />
                            ) : (
                                <ProductTransaction
                                    key={notif?.id}
                                    notif={notif}
                                />
                            )
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default Notification
