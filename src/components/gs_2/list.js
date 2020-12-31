import { Component } from "react";
import Card from "./card";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.profiles.map((profile) => (
          <Card key={profile.id} {...profile} />
        ))}
      </div>
    );
  }
}

export default List;
