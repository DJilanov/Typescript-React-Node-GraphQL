/* global fetch:false */
import ContactsTypes from './ContactsTypes'
import { config } from '../../Config/config'
import Contacts from '../../Models/Contacts'
const apiUrl = config.API_URL

export const fetchContacts = () => {
  return (dispatch: Function) => {
    dispatch({
      method: 'GET',
      type: ContactsTypes.fetchContacts
    })
    return fetch(apiUrl + '?query={contacts{id,name,email}}')
      .then(response => response.json())
      .then(json => dispatch(setContacts(json.data.contacts)))
  }
}

export const setContacts = (contacts: Function) => ({
  type: ContactsTypes.setContacts,
  contacts: contacts
})

export const createContact = (contact: Function) => {
  let query = `mutation addContact($contact: InputContact) {
    addContact(contact: $contact) {
      id,
      name,
      email
    }
  }`;
  return (dispatch: Function) => {
    dispatch({
      type: ContactsTypes.createContacts
    })
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        variables: {
          contact: contact
        }
      })
    })
      .then(response => response.json())
      .then(json => {
        dispatch(addContact(json.data.addContact))
      })
  }
}

export const addContact = (contact: Contacts) => ({
  type: ContactsTypes.addContacts,
  contact
})

export const editContact = (contact: Contacts) => {
  let query = `mutation updateContact($contact: InputContact) {
    updateContact(contact: $contact) {
      id,
      name,
      email
    }
  }`;
  return (dispatch: Function) => {
    dispatch({
      type: ContactsTypes.editContacts
    })
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        variables: {
          contact: contact
        }
      })
    })
      .then(response => response.json())
      .then(() => dispatch(fetchContacts()))
  }
}

export const deleteContact = (id: string) => {
  let query = `mutation deleteContact($id: ID) {
    deleteContact(id: $id)
  }`;
  return (dispatch: Function) => {
    dispatch({
      type: ContactsTypes.deleteContacts
    })
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        variables: {
          id: id
        }
      })
    })
      .then(response => response.json())
      .then(json => dispatch(updateContact(json)))
  }
}

export const updateContact = (contact: Contacts) => ({
  type: ContactsTypes.updateContacts,
  contact
})