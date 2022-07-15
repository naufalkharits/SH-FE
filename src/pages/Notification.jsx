import { useSelector } from "react-redux"
import NotificationSkeleton from "../components/skeletons/NotificationSkeleton"
import Notif from "../components/notifications/Notif"

const Notification = () => {
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
                        <Notif />
                    </div>
                )}
            </div>
        </>
    )
}

export default Notification
