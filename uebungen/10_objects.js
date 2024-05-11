/*
type ReportEntry = {
    subject: string,
    grade: number,
}
*/

export function analyzeGrades(report) {
    let averageGrade =
        sum(...report.map((entry) => entry.grade)) / report.length
    let bestSubject
    for (let entry of report) {
        if (bestSubject === undefined || entry.grade < bestSubject.grade) {
            bestSubject = entry
        }
    }
    return {
        averageGrade,
        bestSubject,
    }
}

function sum(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0)
}
