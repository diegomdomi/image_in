import React from 'react';
import { Search } from './Components/Search';
import SearchAppBar from './Components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPhotos from './Components/MyPhotos.jsx';
import ModalImage from './Components/ModalImage.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route exact path="/"   element={<Search />}/>
        <Route path='/myphotos' element={<MyPhotos/>} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
