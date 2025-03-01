import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { getTransactions, transactionSelectors } from "../redux/transactionSlice"
import { classNameJoin } from "../utils/classNameJoin"
import { priceFormatter } from "../utils/priceFormatter"
import { PayButton } from "./buttons/PayButton"
import ModalCourier from "./modals/ModalCourier"
import TransactionSkeleton from "./skeletons/TransactionSkeleton"
import MyTransaction404 from "./unfound/MyTransaction404"

const Purchase = () => {
  const [tx, setTx] = useState(null)
  const dispatch = useDispatch()
  const transactionState = useSelector((state) => state.transaction)
  const transactions = useSelector(transactionSelectors.selectAll)

  useEffect(() => {
    dispatch(getTransactions({ status: "", as: "buyer" }))
  }, [dispatch])

  useEffect(() => {
    console.log(tx)
  }, [tx])

  return (
    <>
      {transactionState.isModalOn && (
        <ModalCourier dispatch={dispatch} transactionState={transactionState} tx={tx} />
      )}
      <div className="mt-4 w-full space-y-5 px-5 sm:pl-10">
        <p className="font-medium dark:text-white">Histori Pembelian</p>
        {transactionState.loading === "pending" ? (
          <TransactionSkeleton />
        ) : transactions?.length === 0 ? (
          <MyTransaction404 />
        ) : (
          transactions?.map((tx) => (
            <div key={tx.id} className="w-full space-y-7">
              <div className="flex gap-4 rounded-xl">
                <Swiper className="h-14 w-16 rounded-xl object-cover">
                  {tx.product.pictures.map((picture) => (
                    <SwiperSlide key={picture}>
                      <img className="h-14 w-14 rounded-xl object-cover" src={picture} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="w-full space-y-1">
                  <div className="flex justify-between text-xs text-neutral-03 dark:text-zinc-400">
                    <div>
                      <span>{tx?.status}</span>
                      {
                        tx?.status === "PAID" || tx?.status === "DELIVERY" && (<span> - Resi: {tx?.resi || "MENUNGGU DIKIRIM"}</span>)
                      }
                    </div>
                    <span>{dayjs(tx.updatedAt).format("D MMM, HH:mm")}</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="dark:text-white">{tx?.product.name}</div>
                      <div
                        className={classNameJoin(
                          tx?.status === "COMPLETED"
                            ? "line-through dark:text-white"
                            : "dark:text-white"
                        )}>
                        {priceFormatter(tx?.product.price)}
                      </div>
                      {tx?.status === "PENDING" || tx?.status === "ACCEPTED" ? (
                        <div className="dark:text-white">Ditawar {priceFormatter(tx?.price)}</div>
                      ) : tx?.status === "PAID" || tx?.status === "DELIVERY" || tx?.status === "COMPLETED" ? (
                        <div className="dark:text-white">
                          Berhasil ditawar {priceFormatter(tx?.price)}
                        </div>
                      ) : (
                        <div className="dark:text-white">
                          Gagal ditawar {priceFormatter(tx?.price)}
                        </div>
                      )}
                    </div>
                    {(tx?.status === "ACCEPTED" || tx?.status === "WAIT FOR PAYMENT") && (
                      <PayButton
                        className="hidden self-end sm:inline-block"
                        tx={tx}
                        setTx={setTx}
                      />
                    )}
                  </div>
                  {(tx?.status === "ACCEPTED" || tx?.status === "WAIT FOR PAYMENT") && (
                    <PayButton className="w-full sm:hidden" tx={tx} setTx={setTx} />
                  )}
                </div>
              </div>
              <div className="h-px bg-neutral-200 dark:bg-zinc-800"></div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Purchase
