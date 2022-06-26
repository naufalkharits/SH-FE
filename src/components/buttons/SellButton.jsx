import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const SellButton = () => {
    return (
        <Link
            to={"manage-product"}
            className="fixed inset-x-0 bottom-8 z-50 mx-auto flex w-fit items-center gap-4 rounded-xl bg-primary-purple-04 px-5 py-3 text-white shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05"
        >
            <FiPlus className="h-5 w-5" />
            <span>Jual</span>
        </Link>
    );
};

export default SellButton;
