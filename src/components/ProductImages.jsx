import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { productsSelectors } from "../redux/productsSlice"

export const ProductImages = () => {
  const { productId } = useParams()
  const productsState = useSelector((state) => state.products)
  const product = useSelector((state) => productsSelectors.selectById(state, productId))

  return (
    <>
      {productsState.loading === "pending" ? (
        <div className="h-[32rem] w-full animate-pulse bg-smoke dark:bg-zinc-800 sm:rounded-2xl"></div>
      ) : (
        <Swiper
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}>
          {product?.pictures.map((picture) => (
            <SwiperSlide key={picture}>
              <img
                className="h-[32rem] w-full object-cover object-center sm:rounded-2xl"
                src={picture}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  )
}
