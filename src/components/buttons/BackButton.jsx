import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <FiChevronLeft
            className="absolute left-8 top-8 z-50 h-8 w-8 cursor-pointer rounded-full p-2 shadow-lg ring-1 ring-black ring-opacity-5 hover:bg-gray sm:hidden"
            onClick={() => {
                navigate(-1);
            }}
        />
    );
};

export default BackButton;
