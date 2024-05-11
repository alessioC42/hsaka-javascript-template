export function removeSalutation(name) {
    const salutations = ["Hr. ", "Fr. ", "Dr. ", "Prof. "]
    for (let salutation of salutations) {
        if (name.startsWith(salutation)) {
            return name.substring(salutation.length)
        }
    }
    return name
}

export function removeString(subject, needle) {
    while (subject.includes(needle)) {
        let occurenceIndex = subject.indexOf(needle)
        let before = subject.substring(0, occurenceIndex)
        let after = subject.substring(occurenceIndex + needle.length)
        subject = before + after
    }
    return subject
}
