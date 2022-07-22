import { useDispatch, useSelector } from "react-redux"
import { FiX } from "react-icons/fi"
import { CgSpinner } from "react-icons/cg"
import { setIsModalOn } from "../../redux/transactionSlice"
import { classNameJoin } from "../../utils/classNameJoin"

const ModalStatus = ({ update, setUpdate, onSubmit }) => {
    const dispatch = useDispatch()
    const { spinner } = useSelector((state) => state.transaction)

    return (
        <div className="fixed inset-0 z-50 bg-gray-bg">
            <div className="flex h-screen items-center justify-center">
                <div className="h-fit w-96 rounded-2xl bg-white p-8 dark:bg-zinc-900">
                    <div className="mb-4 flex justify-end">
                        <FiX
                            className="h-7 w-7 cursor-pointer rounded-full p-1 shadow hover:bg-gray dark:text-white dark:hover:bg-zinc-800"
                            onClick={() => {
                                dispatch(setIsModalOn(false))
                            }}
                        />
                    </div>
                    <form
                        className="mb-8 space-y-6"
                        id="updateStatus"
                        onSubmit={onSubmit}
                    >
                        <div className="font-medium dark:text-white">
                            Perbarui status penjualan produkmu
                        </div>
                        <div className="flex">
                            <div className="flex h-5 items-center">
                                <input
                                    className="h-4 w-4 appearance-none rounded-full bg-[#C4C4C4] checked:bg-primary-purple-04 hover:bg-primary-purple-05"
                                    type="radio"
                                    name="radio"
                                    value="COMPLETED"
                                    onChange={(e) => {
                                        setUpdate({
                                            ...update,
                                            status: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                            <div className="ml-4 space-y-2 text-sm">
                                <label className="text-neutral-05 dark:text-zinc-50">
                                    Berhasil terjual
                                </label>
                                <p className="text-xs text-neutral-03 dark:text-zinc-400">
                                    Kamu telah sepakat menjual produk ini kepada
                                    pembeli
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex h-5 items-center">
                                <input
                                    className="h-4 w-4 appearance-none rounded-full bg-[#C4C4C4] checked:bg-primary-purple-04 hover:bg-primary-purple-05"
                                    type="radio"
                                    name="radio"
                                    value="REJECTED"
                                    onChange={(e) => {
                                        setUpdate({
                                            ...update,
                                            status: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                            <div className="ml-4 space-y-2 text-sm">
                                <label className="text-neutral-05 dark:text-zinc-50">
                                    Batalkan transaksi
                                </label>
                                <p className="text-xs text-neutral-03 dark:text-zinc-400">
                                    Kamu membatalkan transaksi produk ini dengan
                                    pembeli
                                </p>
                            </div>
                        </div>
                    </form>
                    <button
                        form="updateStatus"
                        className={classNameJoin(
                            spinner
                                ? "flex cursor-wait items-center justify-center gap-2"
                                : "bg-primary-purple-04 hover:bg-primary-purple-05",
                            "w-full rounded-2xl py-3.5 px-6 font-medium text-white disabled:bg-neutral-02 dark:disabled:bg-zinc-500"
                        )}
                        disabled={!update?.status || spinner}
                    >
                        {spinner ? (
                            <>
                                <CgSpinner className="animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <span>Kirim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalStatus
