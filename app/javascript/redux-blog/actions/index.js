// app/javascript/redux-blog/actions/index.js
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

const ROOT_URL = '/api/v1/posts';

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

export function createPost(post) {
  const promise = fetch('/api/v1/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post })
  })
    .then(async (response) => {
      if (!response.ok) {
        const err = await response.json();
        return Promise.reject(err);
      }
      return response.json(); // <-- parsed post
    });

  return {
    type: POST_CREATED,
    payload: promise
  };
}
