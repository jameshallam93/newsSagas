export const getScopeModifier = (scope) =>{
    if (scope === "everything")
        { return "everything?q="
    }
    return "top-headlines?q="
}