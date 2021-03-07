
export const sendEmail = async (body) => {
    const response = await fetch("/api/server.php", {
        method: "POST",
        body: body,
    })
    const { result } = await response.json()
    return result
}