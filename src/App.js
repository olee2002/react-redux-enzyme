import React from 'react';
import './app.scss';

import Header from './component/header'
import Headline from './component/headline'

function App() {
  return (
    <div className="App">
      <Header/>
      <section className='main'>
      <Headline
      post="Posts"
      desc="Click the button to render post!"
      />
      </section>
  
    </div>
  );
}

export default App;
