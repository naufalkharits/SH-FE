import React from "react"
import ReactDOM from "react-dom/client"
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { injectClosedServer } from "./middlewares/axios/closedServer"
import { injectOpenServer } from "./middlewares/axios/openServer"

injectClosedServer(store)
injectOpenServer(store)

disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
