import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import rootReducer from  "./redux/reducer";
// import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import likes from "./redux/reducer";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";

// const store = createStore(rootReducer);
const store = createStore(
  likes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Helmet>
        <title>The Cat App</title>
        <meta property="og:title" content="The Cat App" />
        <meta property="og:site_name" content="The Cat app" />
      </Helmet>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
