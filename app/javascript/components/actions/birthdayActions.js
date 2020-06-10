export const GET_UPCOMING_BIRTHDAYS         = 'GET_UPCOMING_BIRTHDAYS'
export const GET_UPCOMING_BIRTHDAYS_SUCCESS = 'GET_UPCOMING_BIRTHDAYS_SUCCESS'
export const GET_UPCOMING_BIRTHDAYS_FAILURE = 'GET_UPCOMING_BIRTHDAYS_FAILURE'
export const GET_TODAYS_BIRTHDAYS           = 'GET_TODAYS_BIRTHDAYS'
export const GET_TODAYS_BIRTHDAYS_SUCCESS   = 'GET_TODAYS_BIRTHDAYS_SUCCESS'
export const GET_TODAYS_BIRTHDAYS_FAILURE   = 'GET_TODAYS_BIRTHDAYS_FAILURE'


export const getUpcomingBirthdays = () => ({
    type: GET_UPCOMING_BIRTHDAYS,
})

export const getUpcomingBirthdaysSuccess = (employees) => ({
    type: GET_UPCOMING_BIRTHDAYS_SUCCESS,
    payload: employees,
})

export const getUpcomingBirthdaysFailure = () => ({
    type: GET_UPCOMING_BIRTHDAYS_FAILURE,
})

export const getTodaysBirthdays = () => ({
    type: GET_TODAYS_BIRTHDAYS,
})

export const getTodaysBirthdaysSuccess = (employees) => ({
    type: GET_TODAYS_BIRTHDAYS_SUCCESS,
    payload: employees,
})

export const getTodaysBirthdaysFailure = () => ({
    type: GET_TODAYS_BIRTHDAYS_FAILURE,
})