import React from 'react';
import AppRouter from './routes';
// NOTE: You can only return ONE single root (top-level) HTML element per Component.
class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
