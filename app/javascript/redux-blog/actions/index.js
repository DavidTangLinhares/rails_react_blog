export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

const ROOT_URL = 'https://dummyjson.com/posts';

export function fetchPosts() {
  const promise = fetch(ROOT_URL).then((response) => response.json());
  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPost(id) {
  const promise = fetch(`${ROOT_URL}/${id}`).then((response) => response.json());
  return {
    type: FETCH_POST,
    payload: promise
  };
}

// Normally API Call (request) - But we dont have the POST API:
// export function createPost(body) {
// const request = fetch(`${ROOT_URL}?key=${API_KEY}`, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(body)
// }).then(response => response.json())
// return {
//   type: POST_CREATED,
//   payload: request
// };

export function createPost(post, callback) {
  // console.log('createPost: ', post);
  callback();
  return {
    type: POST_CREATED,
    payload: post
  };
}
