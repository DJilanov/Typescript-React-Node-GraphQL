import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import ListProps from '../../Models/ListProps'

import { fetchContacts, deleteContact } from '../../Reducers/Contacts/ContactsActions'
import ContactsTable from '../../Components/ContactsTable/ContactsTable'


class List extends React.Component<ListProps> {
  componentDidMount() {
    let { fetchContacts } = this.props;
    fetchContacts()
  }

  deleteUser = (id: string) => {
    let { deleteContact } = this.props;
    // TODO: Show dialog and on approve fire that
    deleteContact(id)
  }

  render() {
    let { classes, contacts } = this.props;
    return [
      <div className={classes.containerMargin}>
        <Link to={`/contacts/create/`}>
          <Button variant="outlined" color="primary" className={classes.addButton}>Add Contact</Button>
        </Link>
      </div>,
      <ContactsTable contacts={contacts} deleteUser={this.deleteUser} classes={classes}></ContactsTable>
    ]
  }
}

const mapStateToProps = (state: any) => {
  return {
    contacts: state.contacts
  };
}

const mapDispatchToProps = (dispatch: Function) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  deleteContact: (id: string) => dispatch(deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles({
    root: {
      flexGrow: 1,
    },
    containerMargin: {
      marginTop: '10px'
    },
    addButton: {
      marginRight: '10px!important',
      float: 'right'
    }
  })(List));
