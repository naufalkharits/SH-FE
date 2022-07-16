export const phoneNumberFormatter = (phoneNumber) => {
    const firstTwoDigits = String(phoneNumber.slice(0, 2))
    const firstFourDigits = String(phoneNumber.slice(0, 3))
    if (firstTwoDigits === "08") {
        return `62${phoneNumber.slice(1)}`
    }
    if (firstFourDigits === "6208") {
        return `62${phoneNumber.slice(3)}`
    }
    return phoneNumber
}
