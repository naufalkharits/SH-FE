import { useDispatch, useSelector } from "react-redux"
import { setIsModalOn } from "../../redux/transactionSlice"
import { classNameJoin } from "../../utils/classNameJoin"

export const NegoFloatingButton = () => {
  const dispatch = useDispatch()
  const { isModalOn } = useSelector((state) => state.transaction)

  return (
    <button
      className={classNameJoin(
        isModalOn ? "hidden" : "sm:hidden",
        "fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-primary-purple-04 px-6 py-3.5 text-white shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05 dark:shadow-primary-purple-04 dark:hover:shadow-primary-purple-05"
      )}
      onClick={() => {
        dispatch(setIsModalOn(true))
      }}>
      <span>Saya Tertarik dan ingin Nego</span>
    </button>
  )
}
