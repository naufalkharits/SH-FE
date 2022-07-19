import wishlist_404 from "../../images/wishlist-404.png"
import wishlistDark_404 from "../../images/wishlistDark-404.png"

const Wishlist404 = () => {
    return (
        <>
            <img className="mx-auto dark:hidden" src={wishlist_404} alt="" />
            <img
                className="mx-auto hidden dark:block"
                src={wishlistDark_404}
                alt=""
            />
        </>
    )
}

export default Wishlist404
