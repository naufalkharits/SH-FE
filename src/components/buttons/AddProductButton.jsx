import { Link } from "react-router-dom"
import { FiPlus } from "react-icons/fi"

const AddProductCard = ({ height }) => {
    return (
        <Link to="add" className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4">
            <div
                className={`${height} flex cursor-pointer flex-col items-center justify-center rounded border border-dashed border-neutral-02 text-neutral-03 dark:border-zinc-700 dark:text-zinc-400`}
            >
                <FiPlus />
                <div className="text-center">Tambah Produk</div>
            </div>
        </Link>
    )
}

export default AddProductCard
