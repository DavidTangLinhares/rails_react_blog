import { FETCH_POSTS, FETCH_POST, POST_CREATED } from '../actions';

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("Reducer received:", action.payload);
      return action.payload.posts || [];

    // merge or update one post instead of replacing all
    case FETCH_POST:
      const post = action.payload;
      const existing = state.find((p) => p.id === post.id);
      if (existing) {
        return state.map((p) => (p.id === post.id ? post : p));
      } else {
        return [...state, post];
      }

    case POST_CREATED:
      console.log('POST_CREATED - state:', state);
      console.log('POST_CREATED - payload:', action.payload);
      if (action.error || !action.payload || !action.payload.id) {
        // Do not add invalid post
        console.log('POST_CREATED - invalid payload, not adding to state');
        return state;
      }
      return [action.payload, ...state];

    default:
      return state;
  }
}
