import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { productsSelectors } from "../redux/productsSlice"

export const ProductDescriptionsMobile = () => {
  const { productId } = useParams()
  const productsState = useSelector((state) => state.products)
  const product = useSelector((state) => productsSelectors.selectById(state, productId))

  return (
    <div className="mb-8 px-4 sm:hidden sm:px-0">
      <div className="space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
        {productsState.loading === "pending" ? (
          <div className="h-4 w-20 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
        ) : (
          <div className="font-medium dark:text-white">Deskripsi</div>
        )}
        {productsState.loading === "pending" ? (
          <div className="space-y-2 [&>div:last-child]:w-4/5">
            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
          </div>
        ) : (
          <p className="text-sm text-neutral-03 dark:text-zinc-400">{product?.description}</p>
        )}
      </div>
    </div>
  )
}
