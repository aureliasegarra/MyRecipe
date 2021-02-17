import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { changeValue, login } from 'src/actions/user';

const mapStateToProps = (state) => ({ // link with what we have in the state
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.infos.logged,
  loggedMessage: `Bonjour ${state.user.infos.pseudo}`,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
