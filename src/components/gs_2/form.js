import { Component, createRef } from "react";
import axios from "axios";

class Form extends Component {
  //   userNameInput = createRef();

  state = {
    userName: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.userNameInput.current.value );
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(response.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          //   ref={this.userNameInput}
          required
        ></input>
        <button type="submit">add user</button>
      </form>
    );
  }
}

export default Form;
