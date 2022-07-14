import { useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import dayjs from "dayjs"
import { notificationSelectors } from "../redux/notificationSlice"
import IDR from "../utils/IDR"

const Notification = () => {
    const notification = useSelector(notificationSelectors.selectAll)
    const { loading } = useSelector((state) => state.notification)

    return (
        <>
            <div className="container mx-auto space-y-6 p-4 sm:px-16 md:px-32 lg:px-48 xl:px-64 2xl:px-80 3xl:px-96">
                <h1 className="hidden text-xl font-bold sm:block">
                    Notifikasi
                </h1>
                {loading === "pending" ? (
                    <></>
                ) : (
                    <div className="divide-y divide-neutral-200">
                        {notification?.map((notif) => (
                            <div
                                className="flex items-start gap-4 py-6 first:pt-0 last:pb-0"
                                key={notif?.id}
                            >
                                <Swiper className="h-14 w-16 rounded-xl">
                                    {notif?.transaction?.product?.pictures?.map(
                                        (picture) => (
                                            <SwiperSlide key={picture}>
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
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-neutral-03">
                                                {dayjs(notif?.updatedAt).format(
                                                    "D MMM, HH:mm"
                                                )}
                                            </span>
                                            {!notif?.read && (
                                                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        {notif?.transaction?.product?.name}
                                    </div>
                                    <div>
                                        <IDR
                                            price={
                                                notif?.transaction?.product
                                                    ?.price
                                            }
                                        />
                                    </div>
                                    <div>
                                        Ditawar{" "}
                                        <IDR
                                            price={notif?.transaction?.price}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Notification
