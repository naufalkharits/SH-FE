import { useDispatch } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import dayjs from "dayjs"
import { putNotificationById } from "../../redux/notificationSlice"
import { priceFormatter } from "../../utils/priceFormatter"

const NewProduct = ({ notif }) => {
    const dispatch = useDispatch()

    return (
        <div
            className="flex gap-4 py-6 first:pt-0 last:pb-0"
            key={notif?.id}
            onClick={() => {
                !notif?.read &&
                    dispatch(
                        putNotificationById({
                            id: notif?.id,
                            read: true,
                        })
                    )
            }}
        >
            <Swiper className="h-14 w-16 rounded-xl">
                {notif?.product?.pictures?.map((picture) => (
                    <SwiperSlide key={picture}>
                        <img
                            className="h-14 w-14 rounded-xl object-cover object-center"
                            src={picture}
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full space-y-1">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-03 dark:text-zinc-400">
                        {notif?.type}
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-03 dark:text-zinc-400">
                            {dayjs(notif?.createdAt).format("D MMM, HH:mm")}
                        </span>
                        {!notif?.read && (
                            <div className="relative">
                                <span className="absolute top-[2px] right-[2px] flex items-center justify-center">
                                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary-purple-03 opacity-75"></span>
                                    <span className="relative h-2 w-2 rounded-full bg-primary-purple-04 shadow ring-1 ring-primary-purple-05 ring-opacity-90"></span>
                                </span>
                                <div className="h-2.5 w-2.5 cursor-pointer rounded-full bg-red-500"></div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="dark:text-white">{notif?.product?.name}</div>
                <div className="dark:text-white">
                    {priceFormatter(notif?.product?.price)}
                </div>
            </div>
        </div>
    )
}

export default NewProduct
