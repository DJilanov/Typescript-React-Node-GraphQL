import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import Edit from './Edit';

const mockStore = configureMockStore();
const contacts = [{
  id: '1',
  name: 'test',
  email: 'test@abv.bg'
}];
const store = mockStore({
  contacts: contacts
});
const classes = {};
const createContact = () => {
  return {}
}
const match = {
  params: {
    id: '1'
  }
}

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Edit fetchContacts={createContact} match={match} classes={classes} history={createContact} editContact={createContact} contact={contacts[0]}></Edit>
      </Provider>
    ).html().indexOf('>Submit</span>')
  ).toBeGreaterThan(0);
});

it('Pupulates with correct fields', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Edit fetchContacts={createContact} match={match} classes={classes} history={createContact} editContact={createContact} contact={contacts[0]}></Edit>
      </Provider>
    ).html().indexOf('value="test@abv.bg"/>')
  ).toBeGreaterThan(0);
});