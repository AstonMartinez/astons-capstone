export const getRank = (user) => {
    if(user.level === 1) {
        return "Novice"
    } else if(user.level === 2) {
        return "Wanderer"
    } else if(user.level === 3) {
        return "Apprentice"
    } else if(user.level === 4) {
        return "Adventurer"
    } else if(user.level === 5) {
        return "Journeyman"
    } else if(user.level === 6) {
        return "Explorer"
    } else if(user.level === 7) {
        return "Hero"
    } else if(user.level === 8) {
        return "Champion"
    } else if(user.level === 9) {
        return "Master"
    } else if(user.level === 10) {
        return "Legend"
    } else {
        return "TBD"
    }
}

export const getXPGoal = (user) => {
    if(user.level === 1) {
        return "25"
    } else if(user.level === 2) {
        return "50"
    } else if(user.level === 3) {
        return "75"
    } else if(user.level === 4) {
        return "100"
    } else if(user.level === 5) {
        return "125"
    } else if(user.level === 6) {
        return "150"
    } else if(user.level === 7) {
        return "175"
    } else if(user.level === 8) {
        return "200"
    } else if(user.level === 9) {
        return "225"
    } else if(user.level === 10) {
        return "250"
    } else {
        return "300"
    }
}

export const getMaxHealth = (user) => {
    if(user.level === 1) {
        return "50"
    } else if(user.level === 2) {
        return "75"
    } else if(user.level === 3) {
        return "100"
    } else if(user.level === 4) {
        return "125"
    } else if(user.level === 5) {
        return "150"
    } else if(user.level === 6) {
        return "175"
    } else if(user.level === 7) {
        return "200"
    } else if(user.level === 8) {
        return "225"
    } else if(user.level === 9) {
        return "250"
    } else if(user.level === 10) {
        return "275"
    } else {
        return "300"
    }
}
