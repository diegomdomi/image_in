import React from 'react';
import { Search } from './features/Search.jsx';
import SearchAppBar from './Components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImageDetail from './Components/ImageDetail.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route exact path="/" element={<Search />}/>
        <Route path='/detail' element={<ImageDetail/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
