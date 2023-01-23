import React from 'react';
import { Search } from './features/Search.jsx';
import SearchAppBar from './Components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ImageDetail from './Components/ImageDetail.jsx';
import MyPhotos from './Components/MyPhotos.jsx';
import ModalImage from './Components/ModalImage.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route exact path="/"   element={<Search />}/>
        <Route path='/detail'   element={<ModalImage/>} />
        <Route path='/myphotos' element={<MyPhotos/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
