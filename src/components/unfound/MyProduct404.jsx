import myproduct_404 from "../../images/myproduct-404.png"
import myproductDark_404 from "../../images/myproductDark-404.png"

const MyProduct404 = () => {
    return (
        <>
            <img
                className="ml-4 w-1/2 dark:hidden sm:p-4 lg:w-1/3 2xl:w-1/4"
                src={myproduct_404}
                alt=""
            />
            <img
                className="ml-4 hidden w-1/2 dark:block sm:p-4 lg:w-1/3 2xl:w-1/4"
                src={myproductDark_404}
                alt=""
            />
        </>
    )
}

export default MyProduct404
