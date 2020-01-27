import React from 'react';
import './App.css';
import Background from "../Background/Background.js"
import QuoteText from "../QuoteText/QuoteText.js"
import CssBaseLine from "@material-ui/core/CssBaseLine";


function App(){

  return (
    <div className="App">
      <CssBaseLine />
      <Background />
      <QuoteText />
    </div>
  );
}

export default App;