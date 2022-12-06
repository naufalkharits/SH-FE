import { BsWhatsapp } from "react-icons/bs"
import { FiX } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { modalOn } from "../../redux/transactionSlice"
import { priceFormatter } from "../../utils/priceFormatter"

const ModalBerhasil = () => {
  const dispatch = useDispatch()
  const { updatedTx } = useSelector((state) => state.transaction)

  return (
    <div className="fixed inset-0 z-50 bg-pearl">
      <div className="flex h-screen items-center justify-center">
        {/* modal */}
        <div className="h-fit w-96 rounded-2xl bg-white p-8 dark:bg-zinc-900">
          <div className="mb-6 space-y-4">
            <div className="flex justify-end">
              <FiX
                className="h-7 w-7 cursor-pointer rounded-full p-1 shadow hover:bg-smoke dark:text-white dark:hover:bg-zinc-800"
                onClick={() => {
                  dispatch(modalOn(false))
                }}
              />
            </div>
            <h3 className="font-medium dark:text-white">
              Yeay kamu berhasil mendapat harga yang sesuai
            </h3>
            <h3 className="text-sm text-neutral-03 dark:text-zinc-400">
              Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
            </h3>
            <div className="space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 sm:bg-smoke sm:shadow-none sm:ring-0 sm:dark:bg-zinc-800">
              <div className="text-center text-sm font-medium dark:text-white">Product Match</div>
              <div className="flex items-center gap-4">
                <img className="h-12 w-12 rounded-xl" src={updatedTx?.buyer?.picture} alt="" />
                <div className="space-y-1">
                  <div className="text-sm font-medium dark:text-white">
                    {updatedTx?.buyer?.name}
                  </div>
                  <div className="text-xs text-neutral-03 dark:text-zinc-400">
                    {updatedTx?.buyer?.city?.replace(/[^a-zA-Z\s]/g, "")}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  className="h-12 w-12 rounded-xl"
                  src={updatedTx?.product?.pictures[0]}
                  alt=""
                />
                <div className="space-y-1">
                  <div className="text-sm dark:text-white">{updatedTx?.product?.name}</div>
                  <div className="text-sm line-through dark:text-white">
                    {priceFormatter(updatedTx?.product?.price)}
                  </div>
                  <div className="text-sm dark:text-white">
                    Ditawar {priceFormatter(updatedTx?.price)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              window.open(`https://api.whatsapp.com/send?phone=${updatedTx?.buyer?.phone_number}`)
            }}
            className="flex w-full items-center justify-between rounded-2xl bg-primary-purple-04 py-3.5 px-6 text-white hover:bg-primary-purple-05">
            <BsWhatsapp className="invisible" />
            <span className="font-medium">Hubungi via Whatsapp</span>
            <BsWhatsapp />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalBerhasil
