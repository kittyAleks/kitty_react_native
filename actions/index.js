import ActionTypes from './actionTypes';

export const contactsUpdatedAction = (contactList) => ({type: ActionTypes.CONTACTS_UPDATED, contactList});
export const contactSelectedAction = (selectedContactIndex) => ({type: ActionTypes.CONTACT_SELECTED, selectedContactIndex});
export const imagePickedUpAction = (imagePath) => ({type: ActionTypes.IMAGE_PICKED_UP, imagePath});


