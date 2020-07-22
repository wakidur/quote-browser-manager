// Using ES6 modules
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/Header";

import QODComponent from "./QODComponent";
import QuotesComponent from "./QuotesComponent";
import FavoriteQuotesComponent from "./FavoriteQuotesComponent";

function App() {
  return (
    <div className="container">
      <Router>
        <React.Fragment>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact={true} component={QODComponent} />
            <Route path="/quotes" exact component={QuotesComponent} />
            <Route
              path="/favorite-quotes"
              exact
              component={FavoriteQuotesComponent}
            />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
