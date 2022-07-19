import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { store } from "../redux/store"
import Login from "../pages/Login"

test("Email and password value should be empty", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    <Login />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    )

    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")

    expect(emailInputEl.value).toBe("")
    expect(passwordInputEl.value).toBe("")
})

test("Email and password value on change should not be empty", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    <Login />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    )

    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")

    const emailValue = "secondhand@email.com"
    const passwordValue = "sh0123456789"

    fireEvent.change(emailInputEl, { target: { value: emailValue } })
    fireEvent.change(passwordInputEl, { target: { value: passwordValue } })

    expect(emailInputEl.value).toBe(emailValue)
    expect(passwordInputEl.value).toBe(passwordValue)
})

test("Login button should be disabled when inputs is empty", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    <Login />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    )

    const buttonElement = screen.getByRole("button", {
        name: "Masuk",
    })
    expect(buttonElement).toBeDisabled()
})

test("Login button should not be disabled when inputs is not empty", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    <Login />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    )

    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")
    const buttonElement = screen.getByRole("button", {
        name: "Masuk",
    })

    const emailValue = "secondhand@email.com"
    const passwordValue = "sh0123456789"

    fireEvent.change(emailInputEl, { target: { value: emailValue } })
    fireEvent.change(passwordInputEl, { target: { value: passwordValue } })

    expect(buttonElement).not.toBeDisabled()
})

test("Loading should be true when fetching API", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    <Login />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    )

    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")
    const buttonElement = screen.getByRole("button", {
        name: "Masuk",
    })

    const emailValue = "secondhand@email.com"
    const passwordValue = "sh0123456789"

    fireEvent.change(emailInputEl, { target: { value: emailValue } })
    fireEvent.change(passwordInputEl, { target: { value: passwordValue } })

    fireEvent.click(buttonElement)

    expect(buttonElement).toHaveTextContent("Processing...")
})

test("Loading should be false after fetching API", async () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    <Login />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    )

    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")
    const buttonElement = screen.getByRole("button", {
        name: "Masuk",
    })

    const emailValue = "secondhand@email.com"
    const passwordValue = "sh0123456789"

    fireEvent.change(emailInputEl, { target: { value: emailValue } })
    fireEvent.change(passwordInputEl, { target: { value: passwordValue } })

    fireEvent.click(buttonElement)

    await waitFor(() =>
        expect(buttonElement).not.toHaveTextContent("Processing...")
    )
})
