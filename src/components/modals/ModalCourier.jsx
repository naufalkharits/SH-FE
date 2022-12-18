import { useEffect, useState } from "react"
import { FiChevronDown, FiX } from "react-icons/fi"
import { TiArrowRightOutline } from "react-icons/ti"
import { useDispatch, useSelector } from "react-redux"
import { getCosts, resetCosts } from "../../redux/courierSlice"
import { createInvoice, setIsModalOn } from "../../redux/transactionSlice"

const ModalCourier = (props) => {
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.auth)
  const courierState = useSelector((state) => state.courier)

  const [courier, setCourier] = useState({ name: "", product: "", price: 0 })

  const onChangeCourier = (e) => {
    e.target.value
      ? dispatch(
          getCosts({
            from: props.tx.product.seller.city.replace(/\D/g, ""),
            destination: props.tx.buyer.city.replace(/\D/g, ""),
            weight: props.tx.product.weight,
            courier: e.target.value,
          })
        )
      : dispatch(resetCosts())

    !courier.product
      ? setCourier((prev) => {
          return { ...prev, name: e.target.value }
        })
      : setCourier((prev) => {
          return { ...prev, name: e.target.value, product: "" }
        })
  }

  const onChangeCourierProduct = (e) => {
    setCourier((prev) => {
      return { ...prev, product: e.target.value }
    })
  }

  const onChangeShipPrice = (e) => {
    setCourier((prev) => {
      return { ...prev, price: Number(e.target.value) }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(
      createInvoice({
        external_id: `${props.tx.id}`,
        amount: props.tx.price + courier.price,
        email: authState.profile.email,
        mobile_number: authState.profile.phone_number,
        redirect_url: `${window.location.origin}`,
      })
    )
  }

  useEffect(() => {
    console.log(courierState)
  }, [courierState])

  return (
    <div className="fixed inset-0 z-50 bg-pearl">
      <div className="flex min-h-screen items-center justify-center">
        {/* modal */}
        <div className="h-fit w-96 rounded-2xl bg-white p-8 dark:bg-zinc-900">
          <form className="" onSubmit={onSubmit}>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <FiX
                    className="h-7 w-7 cursor-pointer rounded-full p-1 shadow hover:bg-smoke dark:text-white dark:hover:bg-zinc-800"
                    onClick={() => {
                      dispatch(setIsModalOn(false))
                    }}
                  />
                </div>
                <div className="font-medium dark:text-white">Pengiriman</div>
                <div className="flex items-center justify-center gap-4 rounded-2xl p-4 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 sm:bg-smoke sm:shadow-none sm:ring-0 sm:dark:bg-zinc-800">
                  <div>{props.tx.product.seller.city.replace(/[^a-zA-Z\s]/g, "")}</div>
                  <TiArrowRightOutline />
                  <div>{props.tx.buyer.city.replace(/[^a-zA-Z\s]/g, "")}</div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-xs dark:text-white">Kurir</div>
                <label className="relative block">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                    <FiChevronDown />
                  </span>
                  <select
                    className="bg-neutral-01 w-full appearance-none rounded-2xl border border-neutral-02 bg-white py-3.5 pr-10 pl-3 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                    name="courier"
                    onChange={onChangeCourier}>
                    <option value="">Pilih Kurir</option>
                    <option value="pos">Pos Indonesia</option>
                    <option value="jne">JNE Express</option>
                    <option value="tiki">TIKI</option>
                  </select>
                </label>
                {courierState.loading === "idle" && courier?.name && (
                  <label className="relative mt-2 block">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                      <FiChevronDown />
                    </span>
                    <select
                      className="bg-neutral-01 w-full appearance-none rounded-2xl border border-neutral-02 bg-white py-3.5 pr-10 pl-3 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                      name="courierProduct"
                      value={courier.product}
                      onChange={onChangeCourierProduct}>
                      <option value="">Pilih Produk Kurir</option>
                      {courierState.costs?.costs?.map((cost) => (
                        <option key={cost.description} value={cost.description}>
                          {cost.description}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
                {courierState.loading === "idle" && courier?.product && (
                  <label className="relative mt-2 block">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                      <FiChevronDown />
                    </span>
                    <select
                      className="bg-neutral-01 w-full appearance-none rounded-2xl border border-neutral-02 bg-white py-3.5 pr-10 pl-3 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                      name="courierPrice"
                      onChange={onChangeShipPrice}>
                      <option value="">Biaya Pengiriman</option>
                      {courierState.costs?.costs?.map(
                        (cost) =>
                          cost.description === courier.product &&
                          cost.cost.map((price) => (
                            <option key={price.value} value={price.value}>
                              {price.value}
                            </option>
                          ))
                      )}
                    </select>
                  </label>
                )}
              </div>
              <button
                className="w-full rounded-2xl
                bg-primary-purple-04 py-3.5 px-6 font-medium text-white hover:bg-primary-purple-05 disabled:bg-neutral-02 dark:disabled:bg-zinc-500"
                type="submit"
                disabled={
                  props.transactionState.loading === "pending" ||
                  !courier.name ||
                  !courier.product ||
                  !courier.price
                }>
                Bayar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalCourier
