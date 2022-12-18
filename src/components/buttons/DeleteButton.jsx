import { CgSpinner } from "react-icons/cg"
import { deleteProduct } from "../../redux/productsSlice"
import { classNameJoin } from "../../utils/classNameJoin"

export const DeleteButton = (props) => {
  return (
    <button
      className={classNameJoin(
        props.productsState.spinner
          ? "flex cursor-wait items-center justify-center gap-2 bg-neutral-02"
          : "border border-primary-purple-04 hover:bg-primary-purple-05 hover:text-white dark:text-white",
        "mt-6 w-full rounded-2xl p-2 sm:mt-0"
      )}
      type="submit"
      onClick={() =>
        props.dispatch(deleteProduct({ productId: props.params, navigate: props.navigate }))
      }>
      {props.productsState.spinner ? (
        <>
          <CgSpinner className="animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <span>Delete</span>
      )}
    </button>
  )
}
