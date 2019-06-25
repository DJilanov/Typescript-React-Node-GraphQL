import React, { FormEvent } from 'react'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { addContact } from '../../Reducers/Contacts/ContactsActions'

import CreateProps from '../../Models/CreateProps'
import Contacts from '../../Models/Contacts'

class Create extends React.Component<CreateProps> {

  handleSubmit = (form: FormEvent) => {
    debugger;
  }

  render() {
    return (
      <div>
        <h3>Create customer</h3>
        <form onSubmit={this.handleSubmit}>
          {/* <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel> */}
            <Input id="email" name="email" />
          {/* </FormControl>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel> */}
            <Input id="name" name="name" />
          {/* </FormControl> */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addContact: (contact: Contacts) => dispatch(addContact(contact)),
})

export default connect(null, mapDispatchToProps)(Create);
