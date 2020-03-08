import React, { useState } from 'react';
import './App.css';

const axios = require('axios');

function App() {
  const [data, setData] = useState();
  const call = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL + "/scan");
      setData(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <button onClick={call}>Call URL</button>
      {data}
    </div>
  );
}

export default App;
