import { useNavigate } from "react-router-dom"
import { FiChevronLeft } from "react-icons/fi"

const BackFloatingButton = () => {
    const navigate = useNavigate()

    return (
        <FiChevronLeft
            className="absolute left-8 top-8 z-50 h-8 w-8 cursor-pointer rounded-full bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 hover:bg-gray dark:bg-zinc-900 dark:text-white dark:ring-white dark:ring-opacity-5 dark:hover:bg-zinc-800 sm:hidden"
            onClick={() => {
                navigate(-1)
            }}
        />
    )
}

export default BackFloatingButton
