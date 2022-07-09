import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const AddProductCard = ({ height }) => {
    return (
        <Link to="add" className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4">
            <div
                className={`${height} flex cursor-pointer flex-col items-center justify-center rounded border border-dashed border-neutral-02 text-neutral-03`}
            >
                <FiPlus />
                <div>Tambah Produk</div>
            </div>
        </Link>
    );
};

export default AddProductCard;
