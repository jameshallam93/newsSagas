export const formatDate = (date) => {
    const splitByDayAndTime = date.split("T")
    const splitDate = splitByDayAndTime[0].split("-")
    const orderedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
    return orderedDate
}