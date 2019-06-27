import React, { FormEvent } from 'react'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { createContact } from '../../Reducers/Contacts/ContactsActions'

import CreateProps from '../../Models/CreateProps'
import Contacts from '../../Models/Contacts'

class Create extends React.Component<CreateProps, any> {
  state = {
    name: '',
    email: ''
  }

  handleChange = (value: string, arg: string) => {
    let state: any = {}
    state[arg] = value;
    this.setState(state)
  }

  handleSubmit = () => {
    this.props.createContact(this.state)
    this.props.history.push('/contacts/')
  }

  render() {
    const { name, email } = this.state
    return (
      <div>
        <h3>Create customer</h3>
        <form onSubmit={this.handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" name="email" type="email" value={email} onChange={(event) => {
              this.handleChange(event.target.value, 'email')
            }}/>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="name" type="text" value={name} onChange={(event) => {
              this.handleChange(event.target.value, 'name')
            }}/>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  createContact: (contact: Contacts) => dispatch(createContact(contact)),
})

export default connect(null, mapDispatchToProps)(Create);
