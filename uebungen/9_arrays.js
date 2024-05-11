export function filterStrings(arr) {
    let filtered = arr.filter(
        (element) => element.length >= 5 || element[0] === "S",
    )
    return filtered.reverse()
}
