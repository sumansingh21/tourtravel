import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Main from './components/Main';
import Homemaster from './components/User/Homepage/JS/Homemaster';
import PackagedetailsMaster from './components/User/PackageDetails/JS/PackagedetailsMaster';
import Packagesmaster from './components/User/Packages/JS/Packagesmaster';
import AboutMaster from './components/User/Aboutus/JS/AboutMaster';
import BlogMaster from './components/User/Blog/JS/BlogMaster';
import BlogDetailsMasters from './components/User/BlogDetails/JS/BlogDetailsMasters';
import ContactMaster from './components/User/ContactUs/JS/ContactMaster';

// -------------------------------------------------------------------------------------

import Main from './components/Admin/Main';
import ViewUser from './components/Admin/pages/ViewUser';
import AddAdmin from './components/Admin/pages/AddAdmin';
import ViewCategory from './components/Admin/pages/ViewCategory';
import AddCategory from './components/Admin/pages/AddCategory';
import AddSubCategory from './components/Admin/pages/AddSubcategory';
import ViewSubCategory from './components/Admin/pages/ViewSubCategory';
import AddPackage from './components/Admin/pages/AddPackage';
import ViewPackages from './components/Admin/pages/ViewPackages';

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
          <Route exact path='/BlogDetails' element={<BlogDetailsMasters/>}></Route>
          <Route exact path='/ContactUs' element={<ContactMaster/>}></Route>

          {/* ---------------------------------------------------------------------------------- */}

          <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/pages/Viewuser' element={<ViewUser />}></Route>
            <Route exact path='/pages/AddAdmin' element={<AddAdmin />}></Route>
            <Route exact path='/pages/ViewCategory' element={<ViewCategory />}></Route>
            <Route exact path='/pages/AddCategory' element={<AddCategory />}></Route>
            <Route exact path='/pages/AddSubCategory' element={<AddSubCategory />}></Route>
            <Route exact path='/pages/ViewSubCategory' element={<ViewSubCategory />}></Route>
            <Route exact path='/pages/AddPackage' element={<AddPackage />}></Route>
            <Route exact path='/pages/ViewPackages' element={<ViewPackages />}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
