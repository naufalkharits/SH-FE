import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { injectClosedServer } from "./middlewares/axios/closedServer"
import { injectOpenServer } from "./middlewares/axios/openServer"

injectClosedServer(store)
injectOpenServer(store)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
