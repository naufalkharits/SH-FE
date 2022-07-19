import wishlisted_404 from "../../images/wishlisted-404.png"
import wishlistedDark_404 from "../../images/wishlistedDark-404.png"

const Wishlisted404 = () => {
    return (
        <>
            {" "}
            <img className="mx-auto dark:hidden" src={wishlisted_404} alt="" />
            <img
                className="mx-auto hidden dark:block"
                src={wishlistedDark_404}
                alt=""
            />
        </>
    )
}

export default Wishlisted404
