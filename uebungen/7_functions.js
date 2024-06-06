export function getMagicNumber(startYear, age) {
    const magicYear = nextEuElectionAndEuFootballCup(startYear)
    const ageAtMagicYear = age + (magicYear - startYear)
    return collatz(ageAtMagicYear)
}

function nextEuElectionAndEuFootballCup(currentYear) {
    if (currentYear < 1979)
        throw Error("The year did not fulfil the criteria >=1979")
    while ((currentYear - 1960) % 4 !== 0 || (currentYear - 1979) % 5 !== 0) {
        currentYear++
    }
    return currentYear
}

function collatz(n, iterationsLeft = 2) {
    if (iterationsLeft === 0) {
        return n
    }

    if (n % 2 === 0) {
        n = n / 2
    } else {
        n = 3 * n + 1
    }

    return collatz(n, iterationsLeft - 1)
}
