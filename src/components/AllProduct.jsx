import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFilteredProduct } from "../redux/productsSlice"
import MyProduct404 from "./unfound/MyProduct404"
import AddProductButton from "./buttons/AddProductButton"
import ProductCard from "./ProductCard"
import SellerSkeleton from "./skeletons/SellerSkeleton"

const AllProduct = () => {
    const dispatch = useDispatch()
    const { profile } = useSelector((state) => state.auth)
    const loadingAuth = useSelector((state) => state.auth.loading)
    const { filteredProduct, loading } = useSelector((state) => state.products)

    const [id, setId] = useState(null)

    useEffect(() => {
        profile && setId(profile.id)
        id && dispatch(getFilteredProduct(id))
    }, [profile, id, dispatch])

    return (
        <div className="w-full space-y-2 sm:pl-5">
            <div className="flex flex-wrap">
                {loadingAuth === "pending" || loading === "pending" ? (
                    <SellerSkeleton />
                ) : (
                    filteredProduct && (
                        <>
                            {filteredProduct.length === 0 ? (
                                <div className="flex w-full items-center">
                                    <AddProductButton height={"h-72"} />
                                    <MyProduct404 />
                                </div>
                            ) : filteredProduct.length >= 4 ? (
                                <></>
                            ) : (
                                <AddProductButton height={"h-full"} />
                            )}
                            {filteredProduct.map((product) => (
                                <div
                                    className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4"
                                    key={product.id}
                                >
                                    <ProductCard
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        category={product.category}
                                        pictures={product.pictures[0]}
                                    />
                                </div>
                            ))}
                        </>
                    )
                )}
            </div>
        </div>
    )
}

export default AllProduct
