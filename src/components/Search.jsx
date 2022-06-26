import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { keywordQuery } from "../redux/productsSlice";
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const onChange = (query) => dispatch(keywordQuery(query));

    return (
        <label className="relative block w-full text-neutral-03 sm:w-fit">
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                <FiSearch className="h-5 w-5" />
            </span>
            <input
                className={
                    location.pathname === "/"
                        ? "w-full rounded-2xl py-3 pl-6 pr-14 placeholder:text-neutral-03 focus:outline-none sm:bg-gray"
                        : "w-full rounded-2xl bg-gray py-3 pl-6 pr-14 placeholder:text-neutral-03 focus:outline-none"
                }
                placeholder="Cari di sini ..."
                type="text"
                name="search"
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        </label>
    );
};

export default Search;
