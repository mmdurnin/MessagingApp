import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Background from './components/background';
import MessageIndex from './components/messages/message-index';

class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <MessageIndex />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));