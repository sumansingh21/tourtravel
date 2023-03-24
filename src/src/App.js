import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Main from './components/Main';
import Homemaster from './components/Homepage/JS/Homemaster';
import PackagedetailsMaster from './components/PackageDetails/JS/PackagedetailsMaster';
import Packagesmaster from './components/Packages/JS/Packagesmaster';
import AboutMaster from './components/Aboutus/JS/AboutMaster';
import BlogMaster from './components/Blog/JS/BlogMaster';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homemaster/>}></Route>
          <Route exact path='/Packagedetails' element={<PackagedetailsMaster/>}></Route>
          <Route exact path='/Packages' element={<Packagesmaster/>}></Route>
          <Route exact path='/AboutUS' element={<AboutMaster/>}></Route>
          <Route exact path='/Blog' element={<BlogMaster/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
