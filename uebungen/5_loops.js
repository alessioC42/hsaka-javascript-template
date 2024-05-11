const n = 123

let currentCollatz = n
while (true) {
    if (currentCollatz in [1, 2, 4]) {
        break
    } else if (currentCollatz % 2 === 0) {
        currentCollatz = currentCollatz / 2
    } else {
        currentCollatz = 3 * currentCollatz + 1
    }
    console.log(currentCollatz)
}
console.log("Reached end of Collatz sequence.")
