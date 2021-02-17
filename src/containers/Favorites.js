import { connect } from 'react-redux';
import Favorites from 'src/components/Favorites';

const mapStateToProps = (state) => ({
  favorites: state.user.infos.favorites,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
