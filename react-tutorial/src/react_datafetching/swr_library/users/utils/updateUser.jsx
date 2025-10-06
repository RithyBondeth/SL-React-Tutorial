export default async function updateUser(url, token) {
    await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
    })
}