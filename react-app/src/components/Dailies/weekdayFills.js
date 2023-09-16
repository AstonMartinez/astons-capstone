export const checkWeekdayOne = (dayOfRepeat) => {
    const weekdays = dayOfRepeat.split(", ")
    const checker = weekdays.filter(i => i.toLowerCase() === "sunday")
    if(checker.length) {
        return 'filled'
    } else {
        return 'empty'
    }
}

export const checkWeekdayTwo = (dayOfRepeat) => {
    const weekdays = dayOfRepeat.split(", ")
    const checker = weekdays.filter(i => i.toLowerCase() === "monday")
    if(checker.length) {
        return 'filled'
    } else {
        return 'empty'
    }
}

export const checkWeekdayThree = (dayOfRepeat) => {
    const weekdays = dayOfRepeat.split(", ")
    const checker = weekdays.filter(i => i.toLowerCase() === "tuesday")
    if(checker.length) {
        return 'filled'
    } else {
        return 'empty'
    }
}

export const checkWeekdayFour = (dayOfRepeat) => {
    const weekdays = dayOfRepeat.split(", ")
    const checker = weekdays.filter(i => i.toLowerCase() === "wednesday")
    if(checker.length) {
        return 'filled'
    } else {
        return 'empty'
    }
}

export const checkWeekdayFive = (dayOfRepeat) => {
    const weekdays = dayOfRepeat.split(", ")
    const checker = weekdays.filter(i => i.toLowerCase() === "thursday")
    if(checker.length) {
        return 'filled'
    } else {
        return 'empty'
    }
}

export const checkWeekdaySix = (dayOfRepeat) => {
    const weekdays = dayOfRepeat.split(", ")
    const checker = weekdays.filter(i => i.toLowerCase() === "friday")
    if(checker.length) {
        return 'filled'
    } else {
        return 'empty'
    }
}

export const checkWeekdaySeven = (dayOfRepeat) => {
    const weekdays = dayOfRepeat.split(", ")
    const checker = weekdays.filter(i => i.toLowerCase() === "saturday")
    if(checker.length) {
        return 'filled'
    } else {
        return 'empty'
    }
}
