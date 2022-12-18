import { useSelector } from "react-redux"
import { classNameJoin } from "../../utils/classNameJoin"

export const SoldOutFloatingButton = () => {
  const { isModalOn } = useSelector((state) => state.transaction)

  return (
    <button
      className={classNameJoin(
        isModalOn ? "hidden" : "sm:hidden",
        "fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-neutral-02 py-3.5 px-6 text-sm text-white dark:bg-zinc-500 sm:block"
      )}
      disabled>
      SOLD OUT
    </button>
  )
}
