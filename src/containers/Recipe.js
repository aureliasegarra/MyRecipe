import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';

const mapStateToProps = (state) => ({
  recipe: state.recipes[0],
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
