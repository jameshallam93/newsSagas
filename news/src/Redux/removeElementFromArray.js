export const removeElementFromArray = (array, toRemove) => {
    const newArray = []
    array.forEach(element => {
        if (element !== toRemove) {
            newArray.push(element)
        }
    })
    return newArray
}