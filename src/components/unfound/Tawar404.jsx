import Light404 from "../../images/404/Offer404.png"
import Dark404 from "../../images/404/darkMode/OfferDark404.png"

const Tawar404 = () => {
    return (
        <>
            <img className="mx-auto dark:hidden" src={Light404} alt="" />
            <img className="mx-auto hidden dark:block" src={Dark404} alt="" />
        </>
    )
}

export default Tawar404
