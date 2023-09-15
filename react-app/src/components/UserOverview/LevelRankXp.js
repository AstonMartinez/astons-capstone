export const getRankHealth = (user) => {
    if(user.experience_points < 25) {
        return [1, "Novice", 50, 25]
    } else if(user.experience_points > 25 && user.experience_points < 50) {
        return [2, "Wanderer", 100, 50]
    } else if(user.experience_points > 50 && user.experience_points < 75) {
        return [3, "Apprentice", 150, 75]
    } else if(user.experience_points > 75 && user.experience_points < 100) {
        return [4, "Adventurer", 200, 100]
    } else if(user.experience_points > 100 && user.experience_points < 125) {
        return [5, "Journeyman", 250, 125]
    } else if(user.experience_points > 125 && user.experience_points < 150) {
        return [6, "Explorer", 300, 150]
    } else if(user.experience_points > 150 && user.experience_points < 175) {
        return [7, "Hero", 350, 175]
    } else if(user.experience_points > 175 && user.experience_points < 200) {
        return [8, "Champion", 400, 200]
    } else if(user.experience_points > 200 && user.experience_points < 225) {
        return [9, "Master", 450, 225]
    } else if(user.experience_points > 225 && user.experience_points < 250) {
        return [10, "Legend", 500, 250]
    } else {
        return [11, "TBD"]
    }
}

// export const getRank = (user) => {
//     if(user.level === 1) {
//         if(user.experience_points < 25) {
//             return "Novice"
//         } else {
//             return "Wanderer"
//         }
//     }

//     // if(user.level === 2) {
//         if(user.experience_points > 25 && user.experience_points < 50) {
//             return "Wanderer"
//         } else {
//             return "Apprentice"
//         }
//     }
//     // if(user.level === 3) {
//         if(user.experience_points < 75) {
//             return "Apprentice"
//         } else {
//             return "Adventurer"
//         }
//     }

//     if(user.level === 4) {
//         if(user.experience_points < 100) {
//             return "Adventurer"
//         } else {
//             return "Journeyman"
//         }
//     }

//     if(user.level === 5) {
//         if(user.experience_points < 125) {
//             return "Journeyman"
//         } else {
//             return "Explorer"
//         }
//     }

//     if(user.level === 6) {
//         if(user.experience_points < 150) {
//             return "Explorer"
//         } else {
//             return "Hero"
//         }
//     }

//     if(user.level === 7) {
//         if(user.experience_points < 175) {
//             return "Hero"
//         } else {
//             return "Champion"
//         }
//     }

//     if(user.level === 8) {
//         if(user.experience_points < 200) {
//             return "Champion"
//         } else {
//             return "Master"
//         }
//     }

//     if(user.level === 9) {
//         if(user.experience_points < 225) {
//             return "Master"
//         } else {
//             return "Legend"
//         }
//     }

//     if(user.level === 10) {
//         if(user.experience_points < 250) {
//             return "Legend"
//         } else {
//             return "TBD"
//         }
//     } else {
//         return "TBD"
//     }
// }

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
