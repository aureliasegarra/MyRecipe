import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({ recipes }) => (
  <nav className="menu">
    <NavLink
      to="/"
      exact
      className="menu-link"
      activeClassName="menu-link--active"
    >
      Accueil
    </NavLink>

    {recipes.map((recipe) => (
      <NavLink
        to={`/recipe/${recipe.slug}`}
        key={recipe.id}
        className="menu-link"
        activeClassName="menu-link--active"
      >
        {recipe.title}
      </NavLink>
    ))}
  </nav>
);

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
