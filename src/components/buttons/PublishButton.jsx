import { Link } from "react-router-dom";

const PublishButton = () => {
    return (
        <Link
            to={"/manage-product"}
            className="fixed inset-x-0 bottom-8 mx-auto w-fit rounded-2xl bg-primary-purple-04 px-6 py-3.5 text-neutral-01 shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05 sm:hidden"
        >
            <span>Terbitkan</span>
        </Link>
    );
};

export default PublishButton;
