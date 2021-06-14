import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
  };
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading' : 'we are ready'}</div>;
  }
}
export default App;
