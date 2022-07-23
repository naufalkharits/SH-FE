import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    getProducts,
    productsSelectors,
    offsetIncrement,
    offsetDecrement,
    resetOffset,
    setOffset,
} from "../redux/productsSlice"
import Hero from "../components/Hero"
import Category from "../components/Category"
import ProductCard from "../components/ProductCard"
import SellFloatingButton from "../components/buttons/SellFloatingButton"
import ProductSkeleton from "../components/skeletons/ProductSkeleton"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Product404 from "../components/unfound/Product404"
import { classNameJoin } from "../utils/classNameJoin"

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const products = useSelector(productsSelectors.selectAll)
    const { keyword, offset, loading } = useSelector((state) => state.products)
    const [limit] = useState(10)

    if (searchParams.get("page")) {
        if (Number(searchParams.get("page")) <= 1) {
            setSearchParams()
            dispatch(resetOffset())
        }
        if (Number(searchParams.get("page")) * 10 - 10 !== offset) {
            dispatch(setOffset(Number(searchParams.get("page"))))
        }
    } else {
        if (Number(searchParams.get("page")) * 10 - 10 !== offset) {
            dispatch(resetOffset())
        }
    }

    useEffect(() => {
        dispatch(
            getProducts({
                keyword,
                category: searchParams.get("category") || "",
                offset,
            })
        )
    }, [keyword, searchParams, offset, dispatch])

    return (
        <>
            <Hero />
            <div className="container mx-auto hidden p-4 sm:block">
                <Category />
            </div>
            {loading === "idle" && (
                <div className="container mx-auto flex items-center justify-center gap-4">
                    <button
                        className={classNameJoin(
                            searchParams.get("page") === "1" ||
                                Number(searchParams.get("page")) <= 0
                                ? "text-smoke dark:text-zinc-700"
                                : "hover:bg-smoke dark:hover:bg-zinc-800",
                            "rounded-md p-1 shadow dark:text-white dark:shadow-zinc-800"
                        )}
                        disabled={
                            searchParams.get("page") === "1" ||
                            Number(searchParams.get("page")) <= 0
                                ? true
                                : false
                        }
                        onClick={() => {
                            if (searchParams.get("page") === "2") {
                                setSearchParams()
                                dispatch(resetOffset())
                            } else {
                                setSearchParams({
                                    page: Number(searchParams.get("page")) - 1,
                                })
                                dispatch(offsetDecrement(10))
                            }
                        }}
                    >
                        <FiChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        className={classNameJoin(
                            products.length !== 0 &&
                                products.length % limit === 0
                                ? "hover:bg-smoke dark:hover:bg-zinc-800"
                                : "text-smoke dark:text-zinc-700",
                            "rounded-md p-1 shadow dark:text-white dark:shadow-zinc-800"
                        )}
                        disabled={
                            products.length !== 0 &&
                            products.length % limit === 0
                                ? false
                                : true
                        }
                        onClick={() => {
                            if (!searchParams.get("page")) {
                                setSearchParams({
                                    page: 2,
                                })
                                dispatch(offsetIncrement(10))
                            } else {
                                setSearchParams({
                                    page: Number(searchParams.get("page")) + 1,
                                })
                                dispatch(offsetIncrement(10))
                            }
                        }}
                    >
                        <FiChevronRight className="h-5 w-5" />
                    </button>
                </div>
            )}
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {loading === "pending" ? (
                        <ProductSkeleton />
                    ) : (
                        products.map((product) => (
                            <div
                                className="w-1/2 p-4 md:w-1/3 lg:w-1/4 xl:w-1/5"
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
                        ))
                    )}
                </div>
            </div>
            {loading === "idle" && products.length === 0 && <Product404 />}
            <SellFloatingButton />
        </>
    )
}

export default Home
