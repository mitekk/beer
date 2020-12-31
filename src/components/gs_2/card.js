import { Component } from "react";

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
