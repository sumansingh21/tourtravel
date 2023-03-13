import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Main from './components/Main';
import Homemaster from './components/Homepage/JS/Homemaster';
import PackageDetailsMaster from './components/PackageDetails/JS/PackageDetailsMaster';
import Packagesmaster from './components/Packages/JS/Packagesmaster';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homemaster/>}></Route>
          <Route exact path='/Packagedetails' element={<PackageDetailsMaster/>}></Route>
          <Route exact path='/Packages' element={<Packagesmaster/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
