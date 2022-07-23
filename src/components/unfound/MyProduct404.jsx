import Light404 from "../../images/404/MyProduct404.png"
import Dark404 from "../../images/404/darkMode/MyProductDark404.png"

const MyProduct404 = () => {
    return (
        <>
            <img
                className="ml-4 w-1/2 dark:hidden sm:p-4 lg:w-1/3 2xl:w-1/4"
                src={Light404}
                alt=""
            />
            <img
                className="ml-4 hidden w-1/2 dark:block sm:p-4 lg:w-1/3 2xl:w-1/4"
                src={Dark404}
                alt=""
            />
        </>
    )
}

export default MyProduct404
