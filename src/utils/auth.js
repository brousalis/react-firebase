import * as firebase from 'firebase'

export function requireAuth(nextState, replace) {
  if(firebase.auth().currentUser === null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export function login(email, pass, cb) {
  cb = arguments[arguments.length - 1]

  if (localStorage.uid) {
    if (cb) cb(true)
    this.onChange(true)
    return
  }

  firebase.auth()
    .signInWithEmailAndPassword(email, pass)
    .then(function(result) {
      console.log(result)
      localStorage.uid = result.user.uid;
      if (cb) cb(true)
      this.onChange(true)
    }).catch(function(error) {
      if (cb) cb(false)
      this.onChange(false)
    })
}

export function getUser() {
  return firebase.auth().currentUser
}

export function logout(cb) {
  if (cb) cb()
  this.onChange(false)
}

export function loggedIn() {
  return !!(firebase.auth().currentUser === null)
}

export function onChange() {}
