import React from 'react';
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import Create from './Create';

const mockStore = configureMockStore();
const store = mockStore({});
const classes = {};
const createContact = () => { }

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Create history={createContact} classes={classes}></Create>
      </Provider>
    ).html().indexOf('<h3>Create customer</h3>')
  ).toBeGreaterThan(0);
});