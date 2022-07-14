import { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Popover, Transition } from "@headlessui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import dayjs from "dayjs"
import { FiBell } from "react-icons/fi"

import {
    getNotification,
    notificationSelectors,
} from "../../redux/notificationSlice"
import IDR from "../../utils/IDR"

const className = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

const NotificationDropdown = () => {
    const dispatch = useDispatch()
    const notification = useSelector(notificationSelectors.selectAll)
    const { loading } = useSelector((state) => state.notification)
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        user && dispatch(getNotification())
    }, [user, dispatch])

    return (
        <Popover className="relative z-10 hidden sm:inline-block">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={className(
                            open
                                ? "text-primary-purple-04 hover:text-primary-purple-05"
                                : "",
                            "flex justify-center hover:text-primary-purple-05 focus:outline-none"
                        )}
                    >
                        <FiBell className="h-6 w-6" />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Popover.Panel className="absolute right-0 mt-5 w-[32rem] space-y-4 rounded-t rounded-b-2xl bg-white p-6 shadow-md ring-1 ring-neutral-02 ring-opacity-20 focus:outline-none">
                            {loading === "pending" ? (
                                <></>
                            ) : (
                                <div className="divide-y divide-neutral-200">
                                    {notification?.slice(0, 3).map((notif) => (
                                        <div
                                            className="flex items-start gap-4 py-6 first:pt-0 last:pb-0"
                                            key={notif?.id}
                                        >
                                            <Swiper className="h-14 w-16 rounded-xl">
                                                {notif?.transaction?.product?.pictures?.map(
                                                    (picture) => (
                                                        <SwiperSlide
                                                            key={picture}
                                                        >
                                                            <img
                                                                className="h-14 w-14 rounded-xl object-cover object-center"
                                                                src={picture}
                                                                alt=""
                                                            />
                                                        </SwiperSlide>
                                                    )
                                                )}
                                            </Swiper>
                                            <div className="w-full space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-neutral-03">
                                                        {notif?.type}
                                                    </span>
                                                    <span className="text-xs text-neutral-03">
                                                        {dayjs(
                                                            notif?.updatedAt
                                                        ).format(
                                                            "D MMM, HH:mm"
                                                        )}
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        notif?.transaction
                                                            ?.product?.name
                                                    }
                                                </div>
                                                <div>
                                                    <IDR
                                                        price={
                                                            notif?.transaction
                                                                ?.product?.price
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    Ditawar{" "}
                                                    <IDR
                                                        price={
                                                            notif?.transaction
                                                                ?.price
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <Link
                                to="/notification"
                                className="inline-block cursor-pointer text-primary-purple-04 hover:text-primary-purple-05"
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
