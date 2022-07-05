import './App.css';
import { useCallback, useEffect, useState } from 'react';

import {BrowserRouter , Route,Routes} from 'react-router-dom'
import Home from './page/Home';
import Header from './component/Header';
import Movie from './page/Movie';

function App() {
  const [Dlphim,setDlphim] = useState()
  const callPhim = useCallback((data)=>{
    setDlphim(data)
  })
  return (
    // <div className="App ">
      <BrowserRouter>
            <Header/>
        <Routes>
          <Route path='/' element= {<Home callPhim= {callPhim}/>} />
          <Route path='/phim/:slug' element={<Movie Dlphim = {Dlphim}/>} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
