import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import dayjs from "dayjs"
import {
    notificationSelectors,
    putNotification,
} from "../../redux/notificationSlice"
import IDR from "../../utils/IDR"

const NotifDropdown = () => {
    const dispatch = useDispatch()
    const notification = useSelector(notificationSelectors.selectAll)

    return (
        <>
            {notification?.slice(0, 3).map((notif) => (
                <div
                    className="flex items-start gap-4 py-6 first:pt-0 last:pb-0"
                    key={notif?.id}
                    onClick={() => {
                        !notif?.read &&
                            dispatch(
                                putNotification({
                                    id: notif?.id,
                                    read: true,
                                })
                            )
                    }}
                >
                    <Swiper className="h-14 w-16 rounded-xl">
                        {notif?.notification ? (
                            <>
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
                            </>
                        ) : (
                            <>
                                {notif?.product?.pictures?.map((picture) => (
                                    <SwiperSlide key={picture}>
                                        <img
                                            className="h-14 w-14 rounded-xl object-cover object-center"
                                            src={picture}
                                            alt=""
                                        />
                                    </SwiperSlide>
                                ))}
                            </>
                        )}
                    </Swiper>
                    <div className="w-full space-y-1">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-neutral-03">
                                {notif?.type}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-neutral-03">
                                    {dayjs(notif?.createdAt).format(
                                        "D MMM, HH:mm"
                                    )}
                                </span>
                                {!notif?.read && (
                                    <div className="h-2.5 w-2.5 cursor-pointer rounded-full bg-red-500"></div>
                                )}
                            </div>
                        </div>
                        <div>
                            {notif?.transaction?.product?.name ||
                                notif?.product?.name}
                        </div>
                        <div>
                            <IDR
                                price={
                                    notif?.transaction?.product?.price ||
                                    notif?.product?.price
                                }
                            />
                        </div>
                        {notif?.transaction && (
                            <div>
                                Ditawar{" "}
                                <IDR price={notif?.transaction?.price} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default NotifDropdown
