import Contacts from './Contacts'

export default interface EditProps {
    classes: Object,
    match: Object,
    fetchContacts: Function,
    editContact: Function,
    history: Object,
    contact: Contacts
}