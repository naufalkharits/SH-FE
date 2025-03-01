import { useDispatch, useSelector } from "react-redux"
import { FiX } from "react-icons/fi"
import { CgSpinner } from "react-icons/cg"
import { setModalResi } from "../../redux/transactionSlice"
import { classNameJoin } from "../../utils/classNameJoin"

const ModalResi = ({ update, setUpdate, onSubmit }) => {
    const dispatch = useDispatch()
    const { spinner } = useSelector((state) => state.transaction)

    console.log(update)

    return (
        <div className="fixed inset-0 z-50 bg-pearl">
            <div className="flex h-screen items-center justify-center">
                <div className="h-fit w-96 rounded-2xl bg-white p-8 dark:bg-zinc-900">
                    <div className="mb-4 flex justify-end">
                        <FiX
                            className="h-7 w-7 cursor-pointer rounded-full p-1 shadow hover:bg-smoke dark:text-white dark:hover:bg-zinc-800"
                            onClick={() => {
                                dispatch(setModalResi(false))
                            }}
                        />
                    </div>
                    <form
                        className="mb-8 space-y-4"
                        id="updateResi"
                        onSubmit={onSubmit}
                    >
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                            Resi
                        </label>
                        <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                        type="number"
                        placeholder="Resi"
                        name="resi"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setUpdate({
                                ...update,
                                resi: e.target.value,
                            })
                        }}
                        />
                    </form>
                    <button
                        form="updateResi"
                        className={classNameJoin(
                            spinner
                                ? "flex cursor-wait items-center justify-center gap-2"
                                : "bg-primary-purple-04 hover:bg-primary-purple-05",
                            "w-full rounded-2xl py-3.5 px-6 font-medium text-white disabled:bg-neutral-02 dark:disabled:bg-zinc-500"
                        )}
                        disabled={!update?.resi || spinner}
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

export default ModalResi
