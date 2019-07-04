import ContactsReducer from './ContactsReducer'
import ContactsTypes from './ContactsTypes'

const contacts = [{
  id: '12',
  name: 'Pesho',
  email: 'pesho@abv.bg'
}]

describe('Contacts reducer', () => {
  it('should handle initial state', () => {
    expect(
      ContactsReducer(undefined, {})
    ).toEqual([])
  })

  it('should handle FETCH_CONTACTS', () => {
    expect(
      ContactsReducer([], {
        type: ContactsTypes.fetchContacts
      })
    ).toEqual([])
  })

  it('should handle SET_CONTACTS', () => {
    expect(
      ContactsReducer([], {
        type: ContactsTypes.setContacts,
        contacts: contacts
      })
    ).toEqual(contacts)
  })

  it('should handle CREATE_CONTACT', () => {
    expect(
      ContactsReducer([], {
        type: ContactsTypes.deleteContacts
      })
    ).toEqual([])
  })

  it('should handle ADD_CONTACT', () => {
    expect(
      ContactsReducer([], {
        type: ContactsTypes.addContacts,
        contact: contacts[0]
      })
    ).toEqual(contacts)
  })

  it('should handle EDIT_CONTACT', () => {
    expect(
      ContactsReducer([], {
        type: ContactsTypes.editContacts
      })
    ).toEqual([])
  })

  it('should handle UPDATE_CONTACT', () => {
    expect(
      ContactsReducer(contacts, {
        type: ContactsTypes.updateContacts,
        contact: Object.assign({id: 'test2'}, contacts[0])
      })
    ).toEqual([Object.assign({id: 'test2'}, contacts[0])])
  })

  it('should handle DELETE_CONTACT', () => {
    expect(
      ContactsReducer([], {
        type: ContactsTypes.deleteContacts,
        contact: contacts[0]
      })
    ).toEqual([])
  })
})
