// app/javascript/redux-blog/containers/posts_index.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // Added fallback when no posts yet - for fist rendering
    if (!this.props.posts || this.props.posts.length === 0) {
      return <p>No posts yet.</p>;
    }

    return this.props.posts.map((post) => (
      <Link to={`/posts/${post.id}`} key={post.id}>
        <div className="post-item">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.created_at}</p>
        </div>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            Let's write a post!
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
