import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchRecipes } from '../actions/recipes';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    console.log('je veux charger mes recettes');
    dispatch(fetchRecipes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
