import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions';

import { withRouter } from '../utils/with_router';

class PostsNew extends Component {
  onSubmit = (values) => {
    console.log('onSubmit: ', values);
    this.props.createPost(values, (post) => {
      this.props.navigate('/'); // Navigate after submit
        return post;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>PostsNew</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="content">Content</label>
          <Field
            className="form-control"
            label="Content"
            name="body"
            component="textarea"
            rows="8"
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create Post
          </button>
        </form>
        <Link to="/posts">Back</Link>
      </div>
    );
  }
}

export default reduxForm({ form: 'newPostForm' })(
  connect(null, { createPost })(withRouter(PostsNew))
);
