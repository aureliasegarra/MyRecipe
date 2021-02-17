import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Favorites = ({ favorites }) => (
  <Page>
    <AppHeader />
    <Content
      title="Les recettes myRecipes"
      text="Hummmm voici mes recettes préférées ..."
      recipes={favorites}
    />
  </Page>
);

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
};

export default Favorites;
