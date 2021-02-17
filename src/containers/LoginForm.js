import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';

const mapStateToProps = (state) => ({ // link with what we have in the state
  email: state.user.email,
  password: state.user.password,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
