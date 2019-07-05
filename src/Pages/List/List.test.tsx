import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import List from './List';

const mockStore = configureMockStore();
const store = mockStore({});
const classes = {};
const contacts = [{
  id: '1',
  name: 'test',
  email: 'test@abv.bg'
}];
const match = {
  params: {
    id: '1'
  }
}
const createContact = () => { }

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  console.log('LOG: ', shallow(
    <Provider store={store}>
      <Router>
        <List classes={classes} contacts={contacts}></List>
      </Router>
    </Provider>
  ).html())
  expect(
    shallow(
      <Provider store={store}>
        <Router>
          <List classes={classes}></List>
        </Router>
      </Provider>
    ).exists(<th>ID</th>)
  ).toBe(true);
});

it('Pupulates with correct fields', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Router>
          <List classes={classes} contacts={contacts}></List>
        </Router>
      </Provider>
    ).exists(<th>ID</th>)
  ).toBe(true);
});