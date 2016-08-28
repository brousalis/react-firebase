import React, { Component }  from 'react';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

import * as firebase from 'firebase';

import ItemList from '../ItemList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    var _this = this;

    this.firebaseRef = firebase.database().ref('items');
    this.firebaseRef.on('value', function(dataSnapshot) {
      var items = [];

      dataSnapshot.forEach(function(data) {
        var item = data.val();
        item['.key'] = data.key;
        items.push(item);
      });

      _this.setState({
        items: items
      });
    });
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRef.push({
        text: this.state.text,
        votes: 45,
        array: ['test', 'tes', 'te'],
        test: true
      });
      this.setState({
        text: ''
      });
    }
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    return <div>
      <h1>dashboard</h1>
      <ItemList items={ this.state.items } />
      <form onSubmit={ this.handleSubmit }>
        <input onChange={ this.onChange } value={ this.state.text } />
        <button>{ 'Add #' + (this.state.items.length + 1) }</button>
      </form>
    </div>
  }
}

reactMixin(Dashboard.prototype, ReactFireMixin);

export default Dashboard;
