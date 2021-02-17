import { connect } from 'react-redux';
import Menu from 'src/components/Menu';

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  logged: state.user.infos.logged,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
