import React, { Component } from "react";
import "./LikeIcon.css";

class LikeIcon extends Component {
  state = { liked: false };

  // Toggles between true/false liked state triggered
  // by onClick event listener
  toggle = () => {
    let localLiked = this.state.liked;
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  };

  render() {
    return (
      <div className="LikeButton">
        <div
          className="container"
          style={{ border: "none", width: "15%", height: "15%" }}
          onClick={() => this.toggle()}
        >
          {this.state.liked === false ? (
            <i className="far fa-heart fa-lg"></i>
          ) : (
            <i className="fas fa-heart fa-lg"></i>
          )}
        </div>
      </div>
    );
  }
}

export default LikeIcon;
