import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import {
    offsetIncrement,
    offsetDecrement,
    resetOffset,
    productsSelectors,
} from "../../redux/productsSlice"
import { classNameJoin } from "../../utils/classNameJoin"

const PaginationButton = () => {
    const [limit] = useState(10)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const products = useSelector(productsSelectors.selectAll)

    return (
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
                        if (searchParams.get("category")) {
                            searchParams.delete("page")
                            setSearchParams(searchParams)
                        } else {
                            setSearchParams()
                        }
                        dispatch(resetOffset())
                    } else {
                        setSearchParams([
                            ...searchParams?.entries(),
                            ["page", Number(searchParams.get("page")) - 1],
                        ])
                        dispatch(offsetDecrement(10))
                    }
                }}
            >
                <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
                className={classNameJoin(
                    products.length !== 0 && products.length % limit === 0
                        ? "hover:bg-smoke dark:hover:bg-zinc-800"
                        : "text-smoke dark:text-zinc-700",
                    "rounded-md p-1 shadow dark:text-white dark:shadow-zinc-800"
                )}
                disabled={
                    products.length !== 0 && products.length % limit === 0
                        ? false
                        : true
                }
                onClick={() => {
                    if (!searchParams.get("page")) {
                        setSearchParams([
                            ...searchParams?.entries(),
                            ["page", 2],
                        ])
                        dispatch(offsetIncrement(10))
                    } else {
                        setSearchParams([
                            ...searchParams?.entries(),
                            ["page", Number(searchParams.get("page")) + 1],
                        ])
                        dispatch(offsetIncrement(10))
                    }
                }}
            >
                <FiChevronRight className="h-5 w-5" />
            </button>
        </div>
    )
}

export default PaginationButton
