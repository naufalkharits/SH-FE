import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setShowAuthError } from "../../redux/authSlice"
import { setShowProductsError } from "../../redux/productsSlice"

const DangerToast = () => {
    const dispatch = useDispatch()
    const showAuthError = useSelector((state) => state.auth.showError)
    const authError = useSelector((state) => state.auth.error?.message)
    const showProductsError = useSelector((state) => state.products.showError)
    const productsError = useSelector((state) => state.products.error?.message)

    useEffect(() => {
        if (showAuthError || showProductsError) {
            setTimeout(() => {
                dispatch(setShowAuthError(false))
                dispatch(setShowProductsError(false))
            }, 1500)
        }
    }, [showAuthError, showProductsError, dispatch])

    return (
        <>
            {showAuthError || showProductsError ? (
                <div className="absolute inset-x-0 top-8 z-50 mx-auto w-fit animate-fade rounded-xl bg-alert-danger px-6 py-4 text-center text-white shadow-lg">
                    {authError || productsError}
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default DangerToast
