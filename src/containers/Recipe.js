import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Recipe from 'src/components/Recipe';

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line prefer-destructuring
  const slug = ownProps.match.params.slug;
  const recipeFound = state.recipes.find((recipe) => recipe.slug === slug);
  return {
    recipe: recipeFound,
  };
};

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default withRouter(container);
// a component in a container and a container wrap in withRouter to get infos for the component
