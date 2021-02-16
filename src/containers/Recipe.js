import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Recipe from 'src/components/Recipe';
import { findRecipeBySlug } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line prefer-destructuring
  const { slug } = ownProps.match.params;
  return {
    recipe: findRecipeBySlug(state.recipes, slug),
  };
};

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default withRouter(container);
// a component in a container and a container wrap in withRouter to get infos for the component
