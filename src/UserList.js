import React, { Component } from "react";
import axios from "axios";

const url = "https://reqres.in/api/users";
const next = "?page=2";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get(url).then((res) => {
      this.setState({
        items: res.data.data
      });
    });
  }

  nextPage(e) {
    axios.get(url + next).then((res) => {
      this.setState({
        items: res.data.data
      });
    });
  }

  prevPage(e) {
    axios.get(url).then((res) => {
      this.setState({
        items: res.data.data
      });
    });
  }
  render() {
    return (
      <div>
        <h1 className="header">Users List</h1>
        <div className="row">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>EmailId</th>
              </tr>
            </tbody>
            <tbody>
              {this.state.items.map((items) => (
                <tr key="items.id">
                  <td>{items.id}</td>
                  <td>{items.first_name}</td>
                  <td>{items.last_name}</td>
                  <td>{items.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn-dark col-2" onClick={this.prevPage.bind(this)}>
            Prev
          </button>
          <button className="btn-dark col-2" onClick={this.nextPage.bind(this)}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default UserList;
