import { useEffect, useState } from "react";

const DangerToast = ({ show, message }) => {
    const [showToast, setShowToast] = useState(show);

    useEffect(() => {
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }, []);

    return (
        <>
            {message && showToast && (
                <div className="absolute inset-x-0 top-8 z-50 mx-auto w-fit animate-bounce rounded-xl bg-alert-danger px-6 py-4 text-white shadow-lg">
                    {message}
                </div>
            )}
        </>
    );
};

export default DangerToast;
