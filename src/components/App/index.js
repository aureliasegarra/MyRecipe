import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import recipesTest from 'src/data';

import Loading from './Loading';

import './style.scss';

function App(props) {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Route path="/" exact>
        <Home recipes={recipesTest} />
      </Route>

      <Route path="/">
        <Menu recipes={recipesTest} />
      </Route>

      <Switch>
        <Route path="/recipe/:slug">
          <Recipe recipe={recipesTest[1]} />
        </Route>

        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
