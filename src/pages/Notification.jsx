import { useDispatch, useSelector } from "react-redux"
import {
    notificationSelectors,
    putNotification,
} from "../redux/notificationSlice"
import NotificationSkeleton from "../components/skeletons/NotificationSkeleton"
import NewProduct from "../components/notifications/NewProduct"
import ProductTransaction from "../components/notifications/ProductTransaction"
import Notification404 from "../unfound/Notification404"

const Notification = () => {
    const dispatch = useDispatch()
    const notification = useSelector(notificationSelectors.selectAll)
    const { filteredNotification, loading } = useSelector(
        (state) => state.notification
    )

    return (
        <>
            <div className="container mx-auto p-4 sm:space-y-6 sm:px-16 md:px-32 lg:px-48 xl:px-64 2xl:px-80 3xl:px-96">
                <div className="flex items-end justify-between">
                    <h1 className="hidden text-xl font-bold dark:text-white sm:block">
                        Notifikasi
                    </h1>
                    {loading === "pending" ? (
                        <div className="h-3.5 w-16 animate-pulse rounded bg-gray dark:bg-zinc-800"></div>
                    ) : (
                        filteredNotification?.length !== 0 && (
                            <div
                                className="cursor-pointer text-primary-purple-04 hover:text-primary-purple-05"
                                onClick={() => {
                                    dispatch(putNotification())
                                }}
                            >
                                Read All
                            </div>
                        )
                    )}
                </div>
                {loading === "pending" ? (
                    <div className="divide-y divide-neutral-200 dark:divide-zinc-800">
                        <NotificationSkeleton />
                    </div>
                ) : (
                    <>
                        {notification?.length === 0 ? (
                            <Notification404 />
                        ) : (
                            <div className="divide-y divide-neutral-200 dark:divide-zinc-800">
                                {notification?.map((notif) =>
                                    notif?.type === "NEW_PRODUCT" ? (
                                        <NewProduct
                                            key={notif?.id}
                                            notif={notif}
                                        />
                                    ) : (
                                        <ProductTransaction
                                            key={notif?.id}
                                            notif={notif}
                                        />
                                    )
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default Notification
