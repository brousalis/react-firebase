import Firebase from 'firebase'
import Config from '../../firebase.config.js'

Firebase.initializeApp(Config)

export default {
  requireAuth(nextState, replace) {
    if(Firebase.auth().currentUser === null) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  },

  register(email, pass, cb) {
    cb = arguments[arguments.length - 1]

    Firebase.auth().createUserWithEmailAndPassword(email, pass).then((result) => {
      if (cb) cb(true)
      this.onChange(true)
    }).catch(function(error) {
      if (cb) cb(false)
      this.onChange(false)
    })
  },

  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]

    // if (localStorage.uid) {
    //   if (cb) cb(true)
    //   this.onChange(true)
    //   return
    // }

    Firebase.auth().signInWithEmailAndPassword(email, pass).then((result) => {
      // localStorage.uid = result.user.uid;
      if (cb) cb(true)
      this.onChange(true)
    }).catch(function(error) {
      if (cb) cb(false)
      this.onChange(false)
    })
  },

  getUser() {
    return Firebase.auth().currentUser
  },

  logout(cb) {
    Firebase.auth().signOut()
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!(Firebase.auth().currentUser === null)
  },

  onChange() {}
}
