import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';
import Favorites from 'src/containers/Favorites';

import Loading from './Loading';

import './style.scss';

function App({ loading, fetchData, logged }) {
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        {logged ? (
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
        ) : (
          <Redirect from="/favorites" to="/" />
        )}

        <Route path="/recipe/:slug" exact>
          <Recipe />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  fetchData: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
