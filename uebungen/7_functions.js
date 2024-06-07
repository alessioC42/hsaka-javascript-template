export function getMagicNumber(startYear, age) {
    const magicYear = nextEuElectionAndEuFootballCup(startYear)
    const ageAtMagicYear = age + (magicYear - startYear)
    return collatz(ageAtMagicYear)
}

function nextEuElectionAndEuFootballCup(currentYear) {
    let iterations = Math.ceil((currentYear - 1984) / 20)
    return 1984 + iterations * 20
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
