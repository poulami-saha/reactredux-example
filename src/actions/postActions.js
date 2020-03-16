import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  debugger;
  dispatch({
    type: NEW_POST,
    payload: postData
  });
  // fetch("http://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json"
  //   },
  //   body: JSON.stringify(postData)
  // })
  //   .then(res => {
  //     console.log(res);
  //     res.json();
  //   })
  //   .then(post => {
  //     console.log(post);
  //     dispatch({
  //       type: NEW_POST,
  //       payload: post
  //     });
  //   });
};
