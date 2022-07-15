export const phoneNumber = (value) => {
    const firstTwoDigits = String(value.slice(0, 2))
    const firstFourDigits = String(value.slice(0, 3))
    if (firstTwoDigits === "08") {
        return `62${value.slice(1)}`
    }
    if (firstFourDigits === "6208") {
        return `62${value.slice(3)}`
    }
    return value
}
