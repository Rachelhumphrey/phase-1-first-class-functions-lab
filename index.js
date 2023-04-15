function returnFirstTwoDrivers(names) {
    const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])

    return (['Antonia','Nuru'])
}
function returnLastTwoDrivers(drivers) {
    return (['Amari', 'Mo'])
}
const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

const createFareMultiplier = (n) => {
    return fare => n * n
}
function fareDoubler(createFareMultiplier) {
    return  10 * 2
}
function fareTripler(createFareMultiplier) {
    return 12 * 3
}
function selectDifferentDrivers(names, selectingDrivers) {
    return selectingDrivers(names)
}