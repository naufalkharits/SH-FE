import tawar_404 from "../../images/tawar-404.png"
import tawarDark_404 from "../../images/tawarDark-404.png"

const Tawar404 = () => {
    return (
        <>
            <img className="mx-auto dark:hidden" src={tawar_404} alt="" />
            <img
                className="mx-auto hidden dark:block"
                src={tawarDark_404}
                alt=""
            />
        </>
    )
}

export default Tawar404
