export const removeHtmlTags = (string) => {
    return string.replace(/(<([^>]+)>)/ig, '* ')
}