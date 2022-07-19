import { initializeApp } from "firebase/app"
import { getMessaging, getToken, onMessage } from "firebase/messaging"
import ioClient from "../socket/ioClient"

let store

export const injectFirebase = (_store) => {
    store = _store
}

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const firebaseApp = initializeApp(firebaseConfig)
const messaging = getMessaging(firebaseApp)

export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {
        vapidKey: process.env.REACT_APP_FIREBASE_MESSAGING_KEY,
    })
        .then((currentToken) => {
            if (currentToken) {
                console.log("current token for client: ", currentToken)
                setTokenFound(true)
                ioClient.emit("FCM", {
                    user_id: store.getState().auth?.decodedAccess?.id,
                    fcm_token: currentToken,
                })
            } else {
                console.log(
                    "No registration token available. Request permission to generate one."
                )
                setTokenFound(false)
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            // console.log("An error occurred while retrieving token. ", err)
            // catch error while creating client token
        })
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload)
        })
    })
