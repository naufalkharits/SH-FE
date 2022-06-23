import { useDispatch } from "react-redux";
import { keywordQuery } from "../redux/productsSlice";
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const dispatch = useDispatch();
    const onChange = (query) => dispatch(keywordQuery(query));

    return (
        <label className="relative block text-neutral-03">
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                <FiSearch className="h-5 w-5" />
            </span>
            <input
                className="w-full rounded-2xl bg-gray py-3 pl-6 pr-14 placeholder:text-neutral-03 focus:outline-none"
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
