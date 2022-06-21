import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const JualButton = () => {
    return (
        <Link to={"product/add"}>
            <button className="fixed inset-x-0 bottom-8 mx-auto flex w-fit items-center gap-4 rounded-xl bg-primary-purple-04 px-5 py-3 text-neutral-01 shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05">
                <FiPlus className="h-5 w-5" />
                <span>Jual</span>
            </button>
        </Link>
    );
};

export default JualButton;
