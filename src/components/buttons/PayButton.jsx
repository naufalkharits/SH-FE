import { useDispatch, useSelector } from "react-redux"
import { setIsModalOn } from "../../redux/transactionSlice"
import { classNameJoin } from "../../utils/classNameJoin"

export const PayButton = (props) => {
  const dispatch = useDispatch()
  const transactionState = useSelector((state) => state.transaction)

  return (
    <button
      className={classNameJoin(
        transactionState.isModalOn ? "hidden" : props.className,
        "h-fit rounded-2xl bg-primary-purple-04 py-2 px-4 text-white hover:bg-primary-purple-05"
      )}
      disabled={transactionState.loading === "PENDING"}
      onClick={() => {
        props.setTx(props.tx)
        props.tx.status === "ACCEPTED" && dispatch(setIsModalOn(true))
        props.tx.status === "WAIT FOR PAYMENT" && window.location.replace(props.tx.invoice_url)
      }}>
      <span>Bayar</span>
    </button>
  )
}
