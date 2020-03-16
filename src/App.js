import React, { Component } from "react";
import "./App.css";
import Post from "./components/post";
import Posts from "./components/posts";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Post />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
