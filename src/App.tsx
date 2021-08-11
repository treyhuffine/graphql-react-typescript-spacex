import * as React from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';

import './App.css';

const App = () => {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback((newId) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
};

export default App;
