import product_404 from "../../images/product-404.png"
import productDark_404 from "../../images/productDark-404.png"

const Product404 = () => {
    return (
        <>
            <img className="mx-auto dark:hidden" src={product_404} alt="" />
            <img
                className="mx-auto hidden dark:block"
                src={productDark_404}
                alt=""
            />
        </>
    )
}

export default Product404
