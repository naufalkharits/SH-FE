import notification_404 from "../../images/notification-404.png"
import notificationDark_404 from "../../images/notificationDark-404.png"

const Notification404 = () => {
    return (
        <>
            <img
                className="mx-auto dark:hidden"
                src={notification_404}
                alt=""
            />
            <img
                className="mx-auto hidden dark:block"
                src={notificationDark_404}
                alt=""
            />
        </>
    )
}

export default Notification404
