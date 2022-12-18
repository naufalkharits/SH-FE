import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { productsSelectors } from "../redux/productsSlice"
import { setIsModalOn } from "../redux/transactionSlice"
import { priceFormatter } from "../utils/priceFormatter"
import { DeleteButton } from "./buttons/DeleteButton"
import { EditButton } from "./buttons/EditButton"
import { InOrderButton } from "./buttons/InOrderButton"
import { SoldOutButton } from "./buttons/SoldOutButton"

export const ProductInteractions = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { productId } = useParams()
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.auth)
  const productsState = useSelector((state) => state.products)
  const transactionState = useSelector((state) => state.transaction)
  const product = useSelector((state) => productsSelectors.selectById(state, productId))

  return (
    <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-black ring-opacity-5 dark:bg-zinc-900 dark:shadow-zinc-800 dark:ring-white dark:ring-opacity-10">
      <div className="mb-4 space-y-2">
        <div
          className={
            productsState.loading === "pending"
              ? "h-4 w-32 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"
              : "dark:text-white"
          }>
          {product?.name}
        </div>
        <div
          className={
            productsState.loading === "pending"
              ? "h-3 w-16 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"
              : "text-sm text-neutral-03 dark:text-zinc-400"
          }>
          {product?.category}
        </div>
      </div>
      {productsState.loading === "pending" ? (
        <div className="h-4 w-20 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
      ) : (
        <div className="dark:text-white">{priceFormatter(product?.price)}</div>
      )}
      {authState.loading === "pending" ||
      productsState.loading === "pending" ||
      transactionState.loading === "pending" ? (
        <div className="mt-6 hidden h-12 w-full animate-pulse rounded-2xl bg-smoke dark:bg-zinc-800 sm:block"></div>
      ) : authState.user ? (
        <>
          {product?.seller?.user_id === authState.profile?.id ? (
            <>
              <EditButton location={location} navigate={navigate} params={productId} />
              <DeleteButton
                dispatch={dispatch}
                productsState={productsState}
                navigate={navigate}
                params={productId}
              />
            </>
          ) : (
            <>
              {props.transaction?.filter(
                (tx) => tx.product.id === Number(productId) && tx.status === "PENDING"
              ).length === 0 &&
                product?.status === "READY" && (
                  <button
                    className="mt-6 hidden w-full rounded-2xl bg-primary-purple-04 py-3.5 px-6 text-sm text-white hover:bg-primary-purple-05 sm:block"
                    onClick={() => dispatch(setIsModalOn(true))}>
                    Saya tertarik dan ingin nego
                  </button>
                )}
              {props.transaction?.filter(
                (tx) => tx.product.id === Number(productId) && tx.status === "PENDING"
              ).length > 0 &&
                product?.status === "READY" && (
                  <button
                    className="mt-6 hidden w-full rounded-2xl bg-neutral-02 py-3.5 px-6 text-sm text-white dark:bg-zinc-500 sm:block"
                    disabled>
                    Menunggu respon penjual
                  </button>
                )}
              {product?.status === "IN ORDER" && <InOrderButton />}
              {product?.status === "SOLD" && <SoldOutButton />}
            </>
          )}
        </>
      ) : (
        <button
          className="mt-6 hidden w-full rounded-2xl bg-primary-purple-04 py-3.5 px-6 text-sm text-white hover:bg-primary-purple-05 sm:block"
          onClick={() => {
            navigate("/login")
          }}>
          Saya tertarik dan ingin nego
        </button>
      )}
    </div>
  )
}
