import ContactsTypes from './ContactsTypes'

const contacts = (state = [], action: any) => {
    switch (action.type) {
      case ContactsTypes.fetchContacts:
        //   TODO: Add loader or something
        return state
      case ContactsTypes.setContacts:
        return action.contacts.map((contact: any) => {
          contact.editMode = false
          return contact
        });
      case ContactsTypes.addContacts:
        return [
          ...state,
          {
            id: action.contact.id,
            text: action.contact.text,
            deleted: action.contact.deleted,
            editMode: false
          }
        ]
      case ContactsTypes.updateContacts:
        return state.map((contact: any) =>
          (contact.id === action.contact.id)
            ? { ...action.contact, editMode: false }
            : contact
        )
      case ContactsTypes.deleteContacts:
        return state.map((contact: any) =>
          (contact.id === action.id)
            ? { ...action.contact, editMode: false }
            : contact
        )
      default:
        return state
    }
  }
  
  export default contacts
  