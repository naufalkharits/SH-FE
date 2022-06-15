import { FiSearch } from "react-icons/fi";

const Search = () => {
    return (
        <label className="relative block text-neutral-03">
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                <FiSearch className="h-5 w-5" />
            </span>
            <input
                className="w-full rounded-2xl bg-gray py-3 pl-6 placeholder:text-neutral-03 focus:outline-none"
                placeholder="Cari di sini ..."
                type="text"
                name="search"
            />
        </label>
    );
};

export default Search;
