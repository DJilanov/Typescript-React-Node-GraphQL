import ContactsTypes from './ContactsTypes'
import Contacts from '../../Models/Contacts'

const contacts = (state = [], action: any) => {
    switch (action.type) {
      case ContactsTypes.fetchContacts:
        //   TODO: Add loader or something
        return state
      case ContactsTypes.setContacts:
        return action.contacts.map((contact: Contacts) => {
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
        return state.map((contact: Contacts) =>
          (contact.id === action.contact.id)
            ? { ...action.contact }
            : contact
        )
      case ContactsTypes.deleteContacts:
        return state.map((contact: Contacts) =>
          (contact.id === action.id)
            ? { ...action.contact }
            : contact
        )
      default:
        return state
    }
  }
  
  export default contacts
  