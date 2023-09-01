
export const getImageUrl = async (image) => {
    const formData = new FormData()
    formData.append("image", image)

    const res = await fetch("/api/images/create", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: formData
    })

    const data = await res.json()
    return data
}

export const deleteImageUrl = async (restaurantId) => {
    const res = await fetch(`/api/images/delete/${restaurantId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })

    const data = await res.json()
    return data

    // if (res.message) {
    //     return data
    // } else {
    //     return data
    // }
}
