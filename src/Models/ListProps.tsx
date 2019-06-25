import Contacts from './Contacts'

export default interface ListProps {
    fetchContacts: Function;
    classes: any,
    contacts: Contacts[]
}