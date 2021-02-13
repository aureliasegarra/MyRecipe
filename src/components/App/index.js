import React from 'react';
import PropTypes from 'prop-types';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import recipesTest from 'src/data';

import Loading from './Loading';

import './style.scss';

function App(props) {
  const recipes = {
    list: recipesTest,
  };
  // eslint-disable-next-line react/destructuring-assignment
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Home recipes={recipes.list} />
      <Menu recipes={recipes.list} />
      <Recipe recipe={recipesTest[0]} />
      <Error />
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
