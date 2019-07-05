import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import ContactsTable from './ContactsTable';

const mockStore = configureMockStore();
const store = mockStore({});
const classes = {};
const contacts = [{
  id: '1',
  name: 'test',
  email: 'test@abv.bg'
}];
const deleteUser = () => { }

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Router>
          <ContactsTable contacts={contacts} deleteUser={deleteUser} classes={classes}></ContactsTable>
        </Router>
      </Provider>
    ).html().indexOf('Delete</span>')
  ).toBeGreaterThan(0);
});

it('Pupulates with correct amount of rows', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Router>
          <ContactsTable contacts={contacts} deleteUser={deleteUser} classes={classes}></ContactsTable>
        </Router>
      </Provider>
    ).html().split('tr class="MuiTableRow').length
  ).toBe(3);
});

it('Pupulates with correct data', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Router>
          <ContactsTable contacts={contacts} deleteUser={deleteUser} classes={classes}></ContactsTable>
        </Router>
      </Provider>
    ).html().indexOf('test@abv.bg</th>')
  ).toBeGreaterThan(0);
});