import { useEffect } from "react"

const NotificationToast = ({ notification, showNotification }) => {
    useEffect(() => {
        console.log(notification)
        console.log(showNotification)
    }, [notification, showNotification])
    return (
        notification !== null && (
            <div className="absolute right-8 top-8 z-50 mx-auto w-fit overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-10 dark:bg-zinc-900 dark:text-white dark:ring-white dark:ring-opacity-10">
                <div className="bg-gray py-2 px-4 dark:bg-zinc-800">
                    {notification.title}
                </div>
                <div className="p-4">{notification.body}</div>
            </div>
        )
    )
}

export default NotificationToast
