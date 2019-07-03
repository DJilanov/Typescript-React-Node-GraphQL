import * as actions from './ContactsActions'
import ContactsTypes from './ContactsTypes'

const contact = {
  id: '12',
  name: 'Pesho',
  email: 'pesho@abv.bg'
}

describe('Contacts actions', () => {
  // it('fetchContacts should create FETCH_CONTACTS action', () => {
  //   expect(actions.fetchContacts()).toEqual({
  //     method: 'GET',
  //     type: ContactsTypes.fetchContacts
  //   })
  // })
  it('setContacts should create SET_CONTACTS action', () => {
    expect(actions.setContacts(contact)).toEqual({
      type: ContactsTypes.setContacts,
      contact: contact
    })
  })
  // it('createContact should create CREATE_CONTACT action', () => {
  //   expect(actions.createContact(contact)).toEqual({
  //     method: 'POST',
  //     type: ContactsTypes.deleteContacts
  //   })
  // })
  it('addContact should create ADD_CONTACT action', () => {
    expect(actions.addContact(contact)).toEqual({
      type: ContactsTypes.addContacts,
      contact: contact
    })
  })
  // it('editContact should create EDIT_CONTACT action', () => {
  //   expect(actions.editContact(contact)).toEqual({
  //     method: 'POST',
  //     type: ContactsTypes.editContacts
  //   })
  // })
  it('updateContact should create UPDATE_CONTACT action', () => {
    expect(actions.updateContact(contact)).toEqual({
      type: ContactsTypes.updateContacts,
      contact: contact
    })
  })
  // it('deleteContact should create DELETE_CONTACT action', () => {
  //   expect(actions.deleteContact(contact.id)).toEqual({
  //     method: 'POST',
  //     type: ContactsTypes.deleteContacts
  //   })
  // })
})
