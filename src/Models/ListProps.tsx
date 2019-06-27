import Contacts from './Contacts'

export default interface ListProps {
    fetchContacts: Function,
    deleteContact: Function,
    classes: any,
    contacts: Contacts[]
}