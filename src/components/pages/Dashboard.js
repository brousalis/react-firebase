import React, { Component }  from 'react'
import reactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire'

import Firebase from 'firebase'

import ItemList from '../ItemList'

import auth from '../../utils/auth'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      userItems: [],
      firebaseRefs: [],
      text: ''
    }

    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    var itemsRef = Firebase.database().ref('weakauras')

    itemsRef.on('value', (snapshot) => {
      var items = []

      snapshot.forEach(function(data) {
        var item = data.val()
        item['.key'] = data.key
        items.push(item)
      })

      this.setState({ items: items })
    })

    this.state.firebaseRefs.push(itemsRef)

    // not you

    var userItemsRef = Firebase.database().ref('user-weakauras/' + auth.user().uid)

    userItemsRef.on('value', (snapshot) => {
      var userItems = []

      snapshot.forEach(function(data) {
        var item = data.val()
        item['.key'] = data.key
        userItems.push(item)
      })

      this.setState({ userItems: userItems })
    })

    this.state.firebaseRefs.push(userItemsRef)
  }

  onChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.state.text && this.state.text.trim().length !== 0) {
      var firebaseRef = Firebase.database().ref('weakauras/' + auth.user().uid)

      var key = firebaseRef.push().key
      var uid = auth.user().uid

      var data = {
        text: this.state.text,
        votes: 0,
        uid: uid
      }

      var updates = {}
      updates['/weakauras/' + key] = data
      updates['/user-weakauras/' + uid + '/' + key] = data

      Firebase.database().ref().update(updates)

      this.setState({
        text: ''
      })

      this.state.firebaseRefs.push(firebaseRef)
    }
  }

  componentWillUnmount() {
    this.state.firebaseRefs.forEach(function(ref) {
      ref.off()
    })
  }

  render() {
    return <div>
      <h1>dashboard</h1>
      <ItemList items={ this.state.items } />
      <ItemList items={ this.state.userItems } />
      <form onSubmit={ this.handleSubmit }>
        <input onChange={ this.onChange } value={ this.state.text } />
        <button>{ 'Add #' + (this.state.items.length + 1) }</button>
      </form>
    </div>
  }
}

reactMixin(Dashboard.prototype, ReactFireMixin)

export default Dashboard
