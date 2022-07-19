import terjual_404 from "../../images/terjual-404.png"
import terjualDark_404 from "../../images/terjualDark-404.png"

const Transaction404 = () => {
    return (
        <>
            <img className="mx-auto dark:hidden" src={terjual_404} alt="" />
            <img
                className="mx-auto hidden dark:block"
                src={terjualDark_404}
                alt=""
            />
        </>
    )
}

export default Transaction404
