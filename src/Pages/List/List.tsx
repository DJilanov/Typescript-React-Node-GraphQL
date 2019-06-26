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
    // TODO: Show dialog and on approve fire that
    deleteContact(id)
  }

  render() {
    let { classes, contacts } = this.props;
    return [
      <div className={classes.containerMargin}>
        <Button variant="outlined" color="primary" className={classes.addButton}>
          <Link to={`/contacts/create/`}>Add Contact</Link>
        </Button>
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

const mapDispatchToProps = (dispatch: any) => ({
  fetchContacts: () => dispatch(fetchContacts()),
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
