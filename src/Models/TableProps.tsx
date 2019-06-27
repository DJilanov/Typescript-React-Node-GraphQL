import Contacts from './Contacts'

export default interface TableProps {
    classes: any,
    deleteUser: Function,
    contacts: Contacts[]
}