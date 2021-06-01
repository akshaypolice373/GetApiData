import axios from "axios";
import React, { Component } from "react";

const URL = "https://reqres.in/users";
// const PAGE = "?page=3";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
  }
  handleSubmit(e) {
    axios.post(URL, this.values).then((res) => {
      console.log(res);
    });
    e.preventDefault();
  }

  handleChange(e) {
    var values = e.target.value;
    this.setState({
      values: values
    });
    console.log(this.values);
  }
  render() {
    return (
      <div className="col-3">
        <br />
        <form onSubmit={() => this.handleSubmit()}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="First Name"
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
          <br />
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Last Name"
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
          <br />
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Email"
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
          <br />
          <button className="btn btn-dark">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
