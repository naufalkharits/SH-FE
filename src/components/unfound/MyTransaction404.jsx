import Dark404 from "../../images/404/darkMode/MyTransactionDark404.png"
import Light404 from "../../images/404/MyTransaction404.png"

const MyTransaction404 = () => {
  return (
    <div className="my-16 w-full">
      <img className="mx-auto dark:hidden" src={Light404} alt="" />
      <img className="mx-auto hidden dark:block" src={Dark404} alt="" />
    </div>
  )
}

export default MyTransaction404
