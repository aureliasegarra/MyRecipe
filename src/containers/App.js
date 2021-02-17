import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchRecipes } from 'src/actions/recipes';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  loading: state.app.loading,
  logged: state.user.infos.logged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchRecipes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
