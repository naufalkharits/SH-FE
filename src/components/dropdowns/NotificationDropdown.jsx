import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Popover, Transition } from "@headlessui/react"
import { FiBell } from "react-icons/fi"
import { VscBellDot } from "react-icons/vsc"
import {
    getNotification,
    notificationSelectors,
    putNotification,
} from "../../redux/notificationSlice"
// import ioClient from "../../socket/ioClient"
import NewProduct from "../notifications/NewProduct"
import NotificationDropdownSkeleton from "../skeletons/NotificationDropdownSkeleton"
import Notification404 from "../unfound/Notification404"
import ProductTransactions from "../notifications/ProductTransactions"
import { classNameJoin } from "../../utils/classNameJoin"

const NotificationDropdown = () => {
    const dispatch = useDispatch()
    const notification = useSelector(notificationSelectors.selectAll)
    const { updatedNotif, readAll, filteredNotification, loading } =
        useSelector((state) => state.notification)
    const { user, decodedAccess } = useSelector((state) => state.auth)

    const [ping, setPing] = useState(null)

    useEffect(() => {
        user && dispatch(getNotification())
    }, [user, updatedNotif, readAll, dispatch])

    useEffect(() => {
        setPing(notification.filter((notif) => notif.read === false))
    }, [notification])

    // useEffect(() => {
    //     ioClient.emit("START", {
    //         user_id: decodedAccess?.id,
    //     })

    //     ioClient.on("NOTIFICATION", () => {
    //         dispatch(getNotification())
    //     })
    // }, [decodedAccess, dispatch])

    return (
        <Popover className="relative z-10 hidden sm:inline-block">
            {({ open }) => (
                <>
                    {loading === "pending" ? (
                        <div className="h-6 w-6 animate-pulse rounded bg-smoke dark:bg-zinc-800"></div>
                    ) : (
                        <Popover.Button
                            className={classNameJoin(
                                open
                                    ? "text-primary-purple-04"
                                    : "dark:text-white",
                                "flex justify-center hover:text-primary-purple-05 focus:outline-none dark:hover:text-primary-purple-03"
                            )}
                        >
                            {ping?.length !== 0 ? (
                                <div className="relative">
                                    <span className="absolute top-[2px] right-[2px] flex items-center justify-center">
                                        <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-primary-purple-03 opacity-75"></span>
                                        <span className="relative h-2 w-2 rounded-full bg-primary-purple-04 shadow ring-1 ring-primary-purple-03 ring-opacity-90 dark:ring-primary-purple-05 dark:ring-opacity-90"></span>
                                    </span>
                                    <VscBellDot className="h-6 w-6" />
                                </div>
                            ) : (
                                <FiBell className="h-6 w-6" />
                            )}
                        </Popover.Button>
                    )}

                    <Transition
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Popover.Panel className="absolute right-0 mt-5 w-[32rem] space-y-4 rounded-t rounded-b-2xl bg-white p-6 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-900 dark:shadow-zinc-800 dark:ring-white dark:ring-opacity-10">
                            {loading === "pending" ? (
                                <NotificationDropdownSkeleton />
                            ) : (
                                <>
                                    {notification?.length === 0 ? (
                                        <Notification404 />
                                    ) : (
                                        <>
                                            {filteredNotification?.length !==
                                                0 && (
                                                <div
                                                    className="mb-2 cursor-pointer text-end text-primary-purple-04 hover:text-primary-purple-05 dark:hover:text-primary-purple-03"
                                                    onClick={() => {
                                                        dispatch(
                                                            putNotification()
                                                        )
                                                    }}
                                                >
                                                    Read All
                                                </div>
                                            )}
                                            <div className="divide-y divide-neutral-200 dark:divide-zinc-800">
                                                {notification
                                                    ?.slice(0, 3)
                                                    .map((notif) =>
                                                        notif?.type ===
                                                        "NEW_PRODUCT" ? (
                                                            <NewProduct
                                                                key={notif?.id}
                                                                notif={notif}
                                                            />
                                                        ) : (
                                                            <ProductTransactions
                                                                key={notif?.id}
                                                                notif={notif}
                                                            />
                                                        )
                                                    )}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                            <Link
                                to="/notification"
                                className="inline-block cursor-pointer text-primary-purple-04 hover:text-primary-purple-05 dark:hover:text-primary-purple-03"
                            >
                                Lihat Selengkapnya
                            </Link>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default NotificationDropdown
