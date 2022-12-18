import dayjs from "dayjs"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { getTransactions, transactionSelectors } from "../redux/transactionSlice"
import { priceFormatter } from "../utils/priceFormatter"
import TransactionSkeleton from "./skeletons/TransactionSkeleton"
import Transaction404 from "./unfound/Transaction404"

const Sold = () => {
  const dispatch = useDispatch()

  const transaction = useSelector(transactionSelectors.selectAll)

  const { loading } = useSelector((state) => state.transaction)

  useEffect(() => {
    dispatch(getTransactions({ status: "COMPLETED", as: "seller" }))
  }, [dispatch])

  return (
    <div className="mt-4 w-full space-y-5 px-5 sm:pl-10">
      <p className="font-medium dark:text-white">Histori Penjualan Produk</p>
      {loading === "pending" ? (
        <TransactionSkeleton />
      ) : transaction?.length === 0 ? (
        <div className="my-16 w-full">
          <Transaction404 />
        </div>
      ) : (
        transaction?.map((tx) => (
          <div key={tx.id} className="w-full space-y-7">
            <div className="flex gap-6 rounded-xl">
              <Swiper className="h-14 w-16 rounded-xl object-cover">
                {tx.product.pictures.map((picture) => (
                  <SwiperSlide key={picture}>
                    <img className="h-14 w-14 rounded-xl object-cover" src={picture} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="w-full space-y-1">
                <div className="flex justify-between text-xs text-neutral-03 dark:text-zinc-400">
                  <span>Produk Terjual</span>
                  <span>{dayjs(tx.updatedAt).format("D MMM, HH:mm")}</span>
                </div>
                <div className="dark:text-white">{tx?.product.name}</div>
                {tx?.product.price === tx?.price ? (
                  <div className="dark:text-white">
                    Berhasil terjual {priceFormatter(tx?.product.price)}
                  </div>
                ) : (
                  <>
                    <div className="line-through dark:text-white">
                      {priceFormatter(tx?.product.price)}
                    </div>
                    <div className="dark:text-white">
                      Berhasil terjual {priceFormatter(tx?.price)}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="h-px bg-neutral-200 dark:bg-zinc-800"></div>
          </div>
        ))
      )}
    </div>
  )
}

export default Sold
