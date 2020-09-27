import React from 'react';

// NOTE: You can only return ONE single root (top-level) HTML element per Component.
class App extends React.Component {
  render() {
    return (
      <div className="rounded overflow-hidden shadow-lg text-center p-10">
        <h1 className="text-gray-700 text-3xl">
          Hello from React/JavaScript!!!
        </h1>
      </div>
    );
  }
}

export default App;
