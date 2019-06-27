/* global fetch:false */
import ContactsTypes from './ContactsTypes'
import { config } from '../../Config/config'
const apiUrl = config.API_URL

export const fetchContacts = () => {
  return (dispatch: any) => {
    dispatch({
      method: 'GET',
      type: ContactsTypes.fetchContacts
    })
    return fetch(apiUrl + '?query={contacts{id,name,email}}')
      .then(response => response.json())
      .then(json => dispatch(setContacts(json.data.contacts)))
  }
}

export const setContacts = (contacts: any) => ({
  type: ContactsTypes.setContacts,
  contacts: contacts
})

export const createContact = (contact: any) => {
  let query = `mutation addContact($contact: InputContact) {
    addContact(contact: $contact) {
      id,
      name,
      email
    }
  }`;
  return (dispatch: any) => {
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

export const addContact = (contact: any) => ({
  type: ContactsTypes.addContacts,
  contact
})

export const editContact = (contact: any) => {
  let query = `mutation updateContact($contact: InputContact) {
    updateContact(contact: $contact) {
      id,
      name,
      email
    }
  }`;
  return (dispatch: any) => {
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
      .then(json => dispatch(updateContact(json)))
  }
}

export const deleteContact = (id: string) => {
  let query = `mutation deleteContact($id: String) {
    deleteContact(id: $id) {
      id,
      name,
      email
    }
  }`;
  return (dispatch: any) => {
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

export const updateContact = (contact: any) => ({
  type: ContactsTypes.updateContacts,
  contact
})