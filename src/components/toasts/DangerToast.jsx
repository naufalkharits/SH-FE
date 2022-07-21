import { useEffect } from "react"

const DangerToast = ({ show, setShow, alert, setAlert, message }) => {
    useEffect(() => {
        setTimeout(() => {
            show && setShow(false)
            alert && setAlert("")
        }, 1500)
    }, [show, alert, message])

    return (
        <>
            {alert || message ? (
                <div className="absolute inset-x-0 top-8 z-50 mx-auto w-fit animate-fade rounded-xl bg-alert-danger px-6 py-4 text-center text-white shadow-lg">
                    {alert || message}
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default DangerToast
