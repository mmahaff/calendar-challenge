import React, { Component } from 'react';
import './App.css';
import EventsContainer from './EventsContainer';

class App extends Component {
  render() {
    return (
      <div className="web-page">
        
        <div>
          <EventsContainer />
        </div>
      </div>

    );
  }
}

export default App;
