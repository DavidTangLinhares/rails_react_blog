// app/javascript/redux-blog/index.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import '../../assets/stylesheets/application.scss';
import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';
import PostsNew from './containers/posts_new';

import postsReducer from './reducers/posts_reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer
});

const container = document.getElementById('root');
if (container) {
  const posts = JSON.parse(container.dataset.posts || '[]');
  const initialState = { posts };
  const middlewares = applyMiddleware(reduxPromise, logger);
  const store = createStore(reducers, initialState, middlewares);
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostsIndex />} />
          <Route path="/posts/new" element={<PostsNew />} />
          <Route path="/posts/:id" element={<PostsShow />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
