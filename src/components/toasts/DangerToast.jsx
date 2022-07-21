import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setShowAuthError } from "../../redux/authSlice"
import { setShowProductsError } from "../../redux/productsSlice"
import { setShowTransactionError } from "../../redux/transactionSlice"

const DangerToast = () => {
    const dispatch = useDispatch()
    const showAuthError = useSelector((state) => state.auth.showError)
    const authError = useSelector((state) => state.auth.error?.message)
    const showProductsError = useSelector((state) => state.products.showError)
    const productsError = useSelector((state) => state.products.error?.message)
    const showTransactionError = useSelector(
        (state) => state.transaction.showError
    )
    const transactionError = useSelector(
        (state) => state.transaction.error?.message
    )

    useEffect(() => {
        if (showAuthError || showProductsError || showTransactionError) {
            setTimeout(() => {
                dispatch(setShowAuthError(false))
                dispatch(setShowProductsError(false))
                dispatch(setShowTransactionError(false))
            }, 1500)
        }
    }, [showAuthError, showProductsError, showTransactionError, dispatch])

    return (
        <>
            {showAuthError || showProductsError || showTransactionError ? (
                <div className="absolute inset-x-0 top-8 z-50 mx-auto w-fit animate-fade rounded-xl bg-alert-danger px-6 py-4 text-center text-white shadow-lg">
                    {authError || productsError || transactionError}
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default DangerToast
