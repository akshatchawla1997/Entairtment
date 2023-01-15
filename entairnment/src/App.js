import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Trending from './Pages/Trending/Trending';
import TvShows from './Pages/TvShows/TvShows';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Trending/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tvshows' element={<TvShows/>}/>
          <Route path='/search' element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
