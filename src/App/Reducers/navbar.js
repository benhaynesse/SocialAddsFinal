import { SET_ACTIVE_TAB, TOGGLE_NAV } from '../constants/index';


const NavbarReducer = (state = {selectedIndex:0}, action) => {    
    switch(action.type){
        case SET_ACTIVE_TAB:
            return {...state, selectedIndex:action.payload};
            break;
         case TOGGLE_NAV:
            console.log(action.focused);
            let focused = action.focused;
            return {...state,focused:focused};
            break;
        default:
            return state;
            break;
    }
}

export default NavbarReducer;