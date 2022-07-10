import { Link } from "react-router-dom";

const EditButton = ({ productId }) => {
    return (
        <Link
            to={`/manage-product/edit/${productId}`}
            className="fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-primary-purple-04 px-6 py-3.5 text-white shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05 sm:hidden"
        >
            <span>Edit</span>
        </Link>
    );
};

export default EditButton;
