import transaksi_404 from "../../images/transaksi-404.png"
import transaksiDark_404 from "../../images/transaksiDark-404.png"

const MyTransaction404 = () => {
    return (
        <>
            <img className="mx-auto dark:hidden" src={transaksi_404} alt="" />
            <img
                className="mx-auto hidden dark:block"
                src={transaksiDark_404}
                alt=""
            />
        </>
    )
}

export default MyTransaction404
