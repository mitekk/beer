import { Component, Fragment } from "react";
import List from "./components/gs_2/list";
import Form from "./components/gs_2/form";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }

  state = {
    profiles: [],
  };

  addProfile = (profile) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profile],
    }));
  };

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <Form onSubmit={this.addProfile} />
        <List profiles={this.state.profiles} />
      </Fragment>
    );
  }
}
export default App;
