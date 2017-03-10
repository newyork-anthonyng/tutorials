import React from 'react';
import { mount } from 'enzyme';
import UserList, { baseApi } from './UserList';
// Mock axios to return dummy data
jest.mock('axios', () => {
  return {
    get: jest.fn(() => {
      return Promise.resolve({
        data: [
          { id: 1, name: 'Andy'},
          { id: 2, name: 'Beth' },
        ],
      });
    }),
  }
});
import axios from 'axios';

it('should call axios with correct arguments when UserList is mounted', () => {
  const wrapper = mount(
    <UserList />
  );
  expect(axios.get.mock.calls.length).toEqual(1);
  expect(axios.get.mock.calls[0][0]).toEqual(`${baseApi}#1`);
});

it('should call axios with correct arguments when clicking on button', () => {
  const wrapper = mount(
    <UserList />
  );
  // reset the mock
  axios.get.mockClear();

  const button = wrapper.find('button');
  button.simulate('click');

  expect(axios.get.mock.calls.length).toEqual(1);
  expect(axios.get.mock.calls[0][0]).toEqual(`${baseApi}#2`);

  axios.get.mockClear();
  button.simulate('click');
  expect(axios.get.mock.calls.length).toEqual(1);
  expect(axios.get.mock.calls[0][0]).toEqual(`${baseApi}#3`);
});
