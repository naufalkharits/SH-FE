import dayjs from "dayjs"
import { useDispatch } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { putNotificationById } from "../../redux/notificationSlice"
import { priceFormatter } from "../../utils/priceFormatter"

const ProductTransactions = ({ notif }) => {
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
      }}>
      <Swiper className="h-14 w-16 rounded-xl">
        {notif?.transaction?.product?.pictures?.map((picture) => (
          <SwiperSlide key={picture}>
            <img className="h-14 w-14 rounded-xl object-cover object-center" src={picture} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-03 dark:text-zinc-400">{notif?.type}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-03 dark:text-zinc-400">
              {dayjs(notif?.createdAt).format("D MMM, HH:mm")}
            </span>
            {!notif?.read && (
              <div className="relative">
                <span className="flex items-center justify-center">
                  <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-primary-purple-03 opacity-75"></span>
                  <span className="relative h-2.5 w-2.5 rounded-full bg-primary-purple-04 shadow ring-1 ring-primary-purple-03 ring-opacity-90 dark:ring-primary-purple-05 dark:ring-opacity-90"></span>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="dark:text-white">{notif?.transaction?.product?.name}</div>
        {notif?.type === "NEW_OFFER" ? (
          <>
            <div className="dark:text-white">
              {priceFormatter(notif?.transaction?.product?.price)}
            </div>
            <div className="dark:text-white">
              Ditawar {priceFormatter(notif?.transaction?.price)}
            </div>
          </>
        ) : notif?.type === "TRANSACTION_REJECTED" ? (
          <>
            <div className="dark:text-white">
              {priceFormatter(notif?.transaction?.product?.price)}
            </div>
            <div className="dark:text-white">
              Gagal ditawar {priceFormatter(notif?.transaction?.price)}
            </div>
          </>
        ) : notif?.type === "TRANSACTION_ACCEPTED" ? (
          <>
            <div className="line-through dark:text-white">
              {priceFormatter(notif?.transaction?.product?.price)}
            </div>
            <div className="dark:text-white">
              Berhasil ditawar {priceFormatter(notif?.transaction?.price)}
            </div>
          </>
        ) : (
          notif?.type === "TRANSACTION_COMPLETED" && (
            <div className="dark:text-white">
              Berhasil dibeli {priceFormatter(notif?.transaction?.price)}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default ProductTransactions
