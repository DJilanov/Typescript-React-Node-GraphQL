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
            name: action.contact.name,
            email: action.contact.email
          }
        ]
      case ContactsTypes.updateContacts:
        return state.map((contact: any) =>
          (contact.id === action.contact.id)
            ? { ...action.contact }
            : contact
        )
      case ContactsTypes.deleteContacts:
        return state.map((contact: any) =>
          (contact.id === action.id)
            ? { ...action.contact }
            : contact
        )
      default:
        return state
    }
  }
  
  export default contacts
  