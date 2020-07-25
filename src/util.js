export const sortData = (data) => {
    const sortedData = [...data]

    sortedData.sort((a, b) => {
        return b.cases - a.cases
    })
    return sortedData
}