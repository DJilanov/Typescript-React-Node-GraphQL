import Contacts from './Contacts'

export default interface EditProps {
    classes: any,
    match: any,
    fetchContacts: Function,
    editContact: Function,
    history: any,
    contact: Contacts
}