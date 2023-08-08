const Day = new Date()
const currentHour = Day.getHours()
const currentDay = Day.getDay()

const logger = (req, res, next) => {
    if(currentDay >= 1 && currentDay < 6 && currentHour >= 9  && currentHour < 17) {
        next()
    } else {
    res.send("<h1>Sorry we are closed</h1>")
}
}

module.exports = logger 