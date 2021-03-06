import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { createHistory as history } from "history";
import { reducer as formReducer } from "redux-form";

import "../assets/stylesheets/application.scss";

import Posts from "./containers/posts.jsx";
import New from "./containers/new.jsx";
import Show from "./containers/show.jsx";

import postsReducer from "./reducers/posts_reducer.js";

const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/posts/new" exact component={New} />
          <Route path="/posts/:id" component={Show} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// Routes Order: "New" must be displayed before "Show" (because the id may be matched as "new")
