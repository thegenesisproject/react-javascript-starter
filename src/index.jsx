import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="card-panel">
        <h1>Hello from React/JavaScript!!!</h1>
      </div>
    );
  }
}

// NOTE: You can only return ONE single root (top-level) HTML element per Component.

render(<App />, window.document.getElementById('app'));
