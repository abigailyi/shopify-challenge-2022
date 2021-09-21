import React, { Component } from "react";
import "./LikeButton.css";

class LikeButton extends Component {
  state = { liked: false };

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
          style={{ border: "none", width: "15%" }}
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

export default LikeButton;
