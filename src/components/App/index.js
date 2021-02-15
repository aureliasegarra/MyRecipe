import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(loading, fetchData) {
  useEffect(() => {
    console.log('chargement des données au 1er rendu');
    fetchData();
  }, []);
  // eslint-disable-next-line react/destructuring-assignment
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

        <Route path="/recipe/:slug">
          <Recipe />
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
  fetchData: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
