import * as firebase from 'firebase';
import * as config from '../../firebase.config.js';

firebase.initializeApp(config);

function requireAuth(nextState, replace) {
  if(firebase.auth().currentUser === null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

module.exports = requireAuth;
