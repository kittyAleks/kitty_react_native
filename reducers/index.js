import ActionTypes from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.CONTACTS_UPDATED: {
            return Object.assign({}, state, {
                contactList: action.contactList
            });
        }
        case ActionTypes.CONTACT_SELECTED: {
             return Object.assign({}, state, {
                 selectedContactIndex: action.selectedContactIndex
             });
        }
        case ActionTypes.IMAGE_PICKED_UP: {
            let newState = JSON.parse( JSON.stringify(state) );
            newState.contactList[state.selectedContactIndex].picture.thumbnail = action.imagePath;
            return newState;
        }
        default:
            return state
    }

};