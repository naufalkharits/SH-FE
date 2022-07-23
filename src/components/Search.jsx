import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { keywordQuery } from "../redux/productsSlice"
import { FiSearch } from "react-icons/fi"
import { classNameJoin } from "../utils/classNameJoin"

const Search = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const onChange = (query) => dispatch(keywordQuery(query))

    return (
        <label className="relative block w-full text-neutral-03 dark:text-zinc-400 sm:w-fit">
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                <FiSearch className="h-5 w-5" />
            </span>
            <input
                className={classNameJoin(
                    location.pathname === "/"
                        ? "sm:bg-smoke sm:dark:bg-zinc-800"
                        : "bg-smoke dark:bg-zinc-800",
                    "w-full rounded-2xl py-3 pl-6 pr-14 text-neutral-03 placeholder:text-neutral-03 focus:shadow-sm focus:outline-none dark:bg-zinc-900 dark:text-zinc-400 dark:placeholder:text-zinc-400 dark:focus:shadow-zinc-700"
                )}
                placeholder="Cari di sini ..."
                type="text"
                name="search"
                onChange={(e) => {
                    onChange(e.target.value)
                }}
            />
        </label>
    )
}

export default Search
