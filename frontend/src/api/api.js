
export const sendEmail = async (body) => {
    const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: body,
    })
    const { result } = await response.json()
    return result
}