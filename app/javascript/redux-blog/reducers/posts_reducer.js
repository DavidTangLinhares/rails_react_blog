// app/javascript/redux-blog/reducers/posts_reducer.js
import { FETCH_POSTS, FETCH_POST, POST_CREATED } from '../actions';

function sortNewest(posts) {
  return posts.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log("postReducer - FETCH_POSTS - action payload: ", action.payload);
      return sortNewest(action.payload || []);

    case FETCH_POST:
      const post = action.payload;
      const existing = state.find((p) => p.id === post.id);
      const newState = existing
        ? state.map((p) => (p.id === post.id ? post : p))
        : [post, ...state];
      return sortNewest(newState);

    case POST_CREATED:
      // console.log('postReducer - POST_CREATED - state:', state);
      // console.log('postReducer - POST_CREATED - payload:', action.payload);
      if (action.error || !action.payload || !action.payload.id) {
        // console.log('postReducer - POST_CREATED - invalid payload, not adding to state');
        return state;
      }
      return sortNewest([action.payload, ...state]);

    default:
      return state;
  }
}
