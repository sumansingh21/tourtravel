import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main></Main>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
