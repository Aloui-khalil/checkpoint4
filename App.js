import React from 'react';
import Photo from "./Photo";
import Title from "./Title";
import './App.css';
import Wrapper from './wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Wrapper>
            <Photo src="/profile.png" />
              <Title style={{color:'red'}}>My Name Here</Title>
              <Title small>My job here</Title>
          </Wrapper>
      </header>
    </div>
  );
}

export default App;
