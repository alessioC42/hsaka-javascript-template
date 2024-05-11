let birthYear = 2007
let birthMonth = 6
let birthDay = 8

let currentYear = 2024
let currentMonth = 5
let currentDay = 11

const birthDate = new Date(birthYear, birthMonth - 1, birthDay)
const currentDate = new Date(currentYear, currentMonth - 1, currentDay)

const ageInMilliseconds = currentDate - birthDate
const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
)

console.log(`age: ${ageInYears}`)
console.log(`quarter: Q${Math.floor(birthDate.getMonth() / 3) + 1}`)
console.log(
    `euElection && euFootballCup: ${(currentYear - 1960) % 4 && (currentYear - 1979) % 5}`,
)
console.log(
    `recieveGifts: ${(birthMonth === currentMonth && birthDay === currentDay) || (currentDay === 24 && currentMonth === 12)}`,
)
