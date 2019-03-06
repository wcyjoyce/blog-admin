import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Show extends Component {
  render() {
    if (!this.props.post) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="post-item">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) { // ownProps enable render for specific post
  const id = parseInt(ownProps.match.params.id, 10); // "10" is the base for "parseInt" function
  const post = state.posts.find(post => post.id === id);
  return { post };
}

export default connect(mapStateToProps)(Show);
