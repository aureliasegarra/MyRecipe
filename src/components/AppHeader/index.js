import React from 'react';
import LoginForm from 'src/components/LoginForm';

import './style.scss';

const AppHeader = () => (
  <header className="header">
    <h1 className="header__title">myRecipe</h1>
    <LoginForm />
  </header>
);

export default AppHeader;
