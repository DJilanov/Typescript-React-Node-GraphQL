import React, { FormEvent } from 'react'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { fetchContacts } from '../../Reducers/Contacts/ContactsActions'
import { editContact } from '../../Reducers/Contacts/ContactsActions'

import EditProps from '../../Models/EditProps'
import Contacts from '../../Models/Contacts'

class Edit extends React.Component<EditProps, any> {
  state = {
    name: '',
    email: ''
  }

  componentWillReceiveProps = (nextProps: EditProps) => {
    if(nextProps.contact) {
      this.setState(nextProps.contact);
    }
  }

  componentWillMount = () => {
    let { fetchContacts, contact } = this.props;
    if(!contact) {
      fetchContacts()
    } else {
      this.setState({
        name: contact.name,
        email: contact.email
      })
    }
  }

  handleChange = (value: string, arg: string) => {
    let state: any = {}
    state[arg] = value;
    this.setState(state)
  }

  handleSubmit = () => {
    this.props.editContact(this.state)
    this.props.history.push('/contacts/')
  }

  render() {
    const { name, email } = this.state
    return (
      <div>
        <h3>Edit customer</h3>
        <form onSubmit={this.handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" name="email" value={email} onChange={(event) => {
              this.handleChange(event.target.value, 'email')
            }}/>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="name" value={name} onChange={(event) => {
              this.handleChange(event.target.value, 'name')
            }}/>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state: any, props: EditProps) => {
  return {
    contact: state.contacts.filter((contact: Contacts) => contact.id === props.match.params.id)[0]
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  editContact: (contact: Contacts) => dispatch(editContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
