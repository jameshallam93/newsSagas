

export const getScopeModifier = (scope) => {
    if (scope === "everything") {
        return "everything"
    }
    return "top-headlines"
}

export const getSourceModifier = sources => {
    let baseString = `&sources=`
    sources.forEach(source => {
        baseString = `${baseString}${source},`
    })
    return baseString
}

export const getSearchTypeModifier = (searchType) => {
    const modifier = searchType === "article" ?
        "?q=" :
        "?qInTitle="
    return modifier
}

export const getSortByModifier = (orderBy) => {
    return `&sortBy=${orderBy}`
}