import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const AddProductCard = () => {
    return (
        <Link to="add" className="w-1/2 p-4 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex h-full cursor-pointer flex-col items-center justify-center rounded border border-dashed border-neutral-02 text-neutral-03">
                <FiPlus />
                <div>Tambah Produk</div>
            </div>
        </Link>
    );
};

export default AddProductCard;
