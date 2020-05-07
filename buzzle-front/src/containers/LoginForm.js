<<<<<<< HEAD
import { connect } from 'react-redux';

import { clearError } from '../actions/error.js';
import { loginUser } from '../actions/user.js';
import {
    updateLoginForm,
    unloadLoginForm
} from '../actions/forms.js';
import LoginForm from '../components/LoginForm.js';

const mapStateToProps = state => ({
    'user': state.user,
    'login': state.loginForm.login,
    'password': state.loginForm.password
});

const mapDispatchToProps = dispatch => ({
    'clearError': () => dispatch(clearError()),
    'loginUser': credentials => dispatch(loginUser(credentials)),
    'updateLoginForm': (name, value) => dispatch(updateLoginForm(name, value)),
    'unloadLoginForm': () => dispatch(unloadLoginForm())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
=======
import { connect } from 'react-redux';

import { clearError } from '../actions/error.js';
import { loginUser } from '../actions/user.js';
import {
    updateLoginForm,
    unloadLoginForm
} from '../actions/forms.js';
import LoginForm from '../components/LoginForm.js';

const mapStateToProps = state => ({
    'user': state.user,
    'login': state.loginForm.login,
    'password': state.loginForm.password
});

const mapDispatchToProps = dispatch => ({
    'clearError': () => dispatch(clearError()),
    'loginUser': credentials => dispatch(loginUser(credentials)),
    'updateLoginForm': (name, value) => dispatch(updateLoginForm(name, value)),
    'unloadLoginForm': () => dispatch(unloadLoginForm())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
>>>>>>> 2667221132704740c4ff83a8469713a301774162
