import { FETCH_POSTS, FETCH_POST, POST_CREATED } from '../actions';

// const initialState = [
//   { id: 42, title: "Title 1", body: "Content 1" },
//   { id: 15, title: "Title 2", body: "Content 2" }
// ];

// Simulate API-generated ID
const fakeId = 1111;

export default function postsReducer(state = null, action) {
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
      return [{ ...action.payload, id: fakeId }, ...state];

    default:
      return state;
  }
}
