import { Link, useLocation } from "react-router-dom"

const EditFloatingButton = ({ productId }) => {
    const location = useLocation()

    return (
        <Link
            to={`/manage-product/edit/${productId}`}
            state={{
                from: location,
            }}
            className="fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-primary-purple-04 px-16 py-3.5 text-white shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05 dark:shadow-primary-purple-04 dark:hover:shadow-primary-purple-05 sm:hidden"
        >
            <span>Edit</span>
        </Link>
    )
}

export default EditFloatingButton
