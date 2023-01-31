import React from 'react';
import { Search } from './Components/Search';
import SearchAppBar from './Components/Navbar.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MyPhotos from './Components/MyPhotos.jsx';
import ModalImage from './Components/ModalImage.jsx';

function App() {
  return (
    <>
    <HashRouter>
      <SearchAppBar />
      <Routes>
        <Route exact path="/"   element={<Search />}/>
        <Route path='/detail'   element={<ModalImage/>} />
        <Route path='/myphotos' element={<MyPhotos/>} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
