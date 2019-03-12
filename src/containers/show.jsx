import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPost } from "../actions";

class Show extends Component {
  componentWillMount() {
    if (!this.props.post) {
      this.props.fetchPost(this.props.match.params.id); // fetch post if it hasn't been fetched already
    }
  }

  render() {
    if (!this.props.post) {
      return <p>Loading...</p>; // returns this message if post cannot be loaded
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost: fetchPost }, dispatch)
}

function mapStateToProps(state, ownProps) { // ownProps enable render for specific post
  const id = parseInt(ownProps.match.params.id, 10); // "10" is the base for "parseInt" function
  return { post: state.posts.find(post => post.id === id) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
