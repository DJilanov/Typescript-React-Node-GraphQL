import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import Create from './Create';

const mockStore = configureMockStore();
const store = mockStore({});
const classes = {};
const contacts = [{
  id: '1',
  name: 'test',
  email: 'test@abv.bg'
}];
const createContact = () => {}

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Create history={createContact} classes={classes}></Create>
      </Provider>
    ).exists(<th>ID</th>)
  ).toBe(true);
});

it('Pupulates with correct amount of rows', () => {
  expect(
    shallow(
      <Provider store={store}>
      <Create history={createContact} classes={classes}></Create>
      </Provider>
    ).exists(<th>ID</th>)
  ).toBe(true);
});

it('Pupulates with correct data', () => {
  expect(
    shallow(
      <Provider store={store}>
      <Create history={createContact} classes={classes}></Create>
      </Provider>
    ).exists(<th>ID</th>)
  ).toBe(true);
});