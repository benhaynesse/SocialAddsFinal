import { SET_ACTIVE_TAB, TOGGLE_NAV } from '../constants/index'

//Set the active tab when users go to direct urls.
export const setActiveTab = (tabId) => {
    return ({
        type: SET_ACTIVE_TAB,
        payload: tabId
    })
}

export const toggleNav = (focused) => {
    return ({
        type: TOGGLE_NAV,
        focused
    })
}
