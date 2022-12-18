import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import BackFloatingButton from "../components/buttons/BackFloatingButton"
import EditFloatingButton from "../components/buttons/EditFloatingButton"
import { InOrderFloatingButton } from "../components/buttons/InOrderFloatingButton"
import { NegoFloatingButton } from "../components/buttons/NegoFloatingButton"
import { SoldOutFloatingButton } from "../components/buttons/SoldOutFloatingButton"
import WishlistButton from "../components/buttons/WishlistButton"
import ModalTawar from "../components/modals/ModalTawar"
import { ProductDescriptions } from "../components/ProductDescriptions"
import { ProductDescriptionsMobile } from "../components/ProductDescriptionsMobile"
import { ProductImages } from "../components/ProductImages"
import { ProductInteractions } from "../components/ProductInteractions"
import SellerCard from "../components/SellerCard"
import { getProductById, productsSelectors } from "../redux/productsSlice"
import { getTransactions, transactionSelectors } from "../redux/transactionSlice"
import { getWishlistById } from "../redux/wishlistSlice"
import { classNameJoin } from "../utils/classNameJoin"

const DetailProduct = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { newTransaction, isModalOn } = useSelector((state) => state.transaction)
  const authState = useSelector((state) => state.auth)
  const productsState = useSelector((state) => state.products)
  const product = useSelector((state) => productsSelectors.selectById(state, productId))
  const transaction = useSelector(transactionSelectors.selectAll)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [productId, dispatch])

  useEffect(() => {
    authState.user && dispatch(getWishlistById(productId))
  }, [authState.user, productId, dispatch])

  useEffect(() => {
    authState.user && dispatch(getTransactions({ status: "", as: "buyer" }))
  }, [authState.user, newTransaction, dispatch])

  return (
    <>
      {productsState?.error?.message === "Product not found" ||
      productsState?.error?.message === "Valid Product ID is required" ? (
        <Navigate to="/404" replace />
      ) : (
        <>
          {isModalOn && (
            <ModalTawar params={productId} product={product} price={price} setPrice={setPrice} />
          )}

          <BackFloatingButton />
          <div className="container mx-auto sm:p-4 xl:px-32 2xl:px-64">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div
                className={classNameJoin(
                  product?.seller?.user_id === authState.profile?.id
                    ? "sm:w-2/3 lg:w-3/4"
                    : "sm:w-3/5 lg:w-2/3",
                  "space-y-4"
                )}>
                <ProductImages />
                <ProductDescriptions />
              </div>
              <div
                className={classNameJoin(
                  product?.seller?.user_id === authState.profile?.id
                    ? "sm:w-1/3 lg:w-1/4"
                    : "sm:w-2/5 lg:w-1/3",
                  "relative z-10 -mt-16 space-y-4 px-4 sm:z-0 sm:-mt-0 sm:space-y-6 sm:px-0"
                )}>
                <ProductInteractions transaction={transaction} />
                {product?.seller?.user_id !== authState.profile?.id && <WishlistButton />}
                <SellerCard
                  loading={productsState.loading}
                  id={product?.seller?.user_id}
                  name={product?.seller?.name}
                  picture={product?.seller?.picture}
                  city={product?.seller?.city?.replace(/[^a-zA-Z\s]/g, "")}
                />
              </div>
              <ProductDescriptionsMobile />
            </div>
          </div>

          {product?.seller?.user_id === authState.profile?.id ? (
            <EditFloatingButton productId={productId} />
          ) : (
            <>
              {transaction?.filter(
                (tx) => tx.product.id === Number(productId) && tx.status === "PENDING"
              ).length === 0 &&
                product?.status === "READY" && <NegoFloatingButton />}
              {transaction?.filter(
                (tx) => tx.product.id === Number(productId) && tx.status === "PENDING"
              ).length > 0 && product?.status === "READY" ? (
                <button
                  className={classNameJoin(
                    isModalOn ? "hidden" : "sm:hidden",
                    "fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-neutral-02 px-6 py-3.5 text-white shadow-lg shadow-neutral-02 dark:bg-zinc-500 dark:shadow-zinc-500"
                  )}
                  disabled>
                  <span>Menunggu respon penjual</span>
                </button>
              ) : (
                <>
                  {product?.status === "IN ORDER" && <InOrderFloatingButton />}
                  {product?.status === "SOLD" && <SoldOutFloatingButton />}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export default DetailProduct
