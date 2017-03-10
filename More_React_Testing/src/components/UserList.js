import React, { Component } from 'react';
import axios from 'axios';

export const baseApi = 'http://jsonplaceholder.typicode.com/users';

class UserList extends Component {
  constructor() {
    super();

    this.url = baseApi;

    this.state = {
      users: [],
      page: 1,
    };

    this.handleUserButtonClick = this.handleUserButtonClick.bind(this);
    this.fetchUserInfo = this.fetchUserInfo.bind(this);
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  handleUserButtonClick() {
    this.setState({
      page: this.state.page + 1,
    }, () => {
      this.fetchUserInfo();
    });
  }

  fetchUserInfo() {
    axios.get(`${this.url}#${this.state.page}`)
      .then((response) => {
        this.setState({
          users: response.data,
        });
      });
  }


  render() {
    return (
      <div>
        <button onClick={this.handleUserButtonClick}>
          Refresh Users
        </button>

        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
