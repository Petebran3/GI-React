import React from 'react';
import Class from './Components/Veryeasy';
import BasicInfo from './Components/Medium';
import InfoList from './Components/Hard';

function App() {
  return (
    <div className="App">
      {<BasicInfo/>}

      {<InfoList/>}
    </div>
  );
}

export default App;
