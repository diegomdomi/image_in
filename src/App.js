import React from 'react';
import { Search } from './Components/Search';
import SearchAppBar from './Components/Navbar.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MyPhotos from './Components/MyPhotos.jsx';
import Footer from './Components/Footer.jsx';
import './index.css'

function App() {
  return (
    <>
      <HashRouter>
        <div className="App">
          <div className="body-container">
            <SearchAppBar />
            <Routes>
              <Route exact path="/"   element={<Search />}/>
              <Route path='/myphotos' element={<MyPhotos/>} />
            </Routes>
          </div>
         <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
