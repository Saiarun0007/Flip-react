import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'
import SearchBar from './components/Searchbar.js'
import Slideshow from './components/Slideshow.js'
import Offerpage from './components/Offerpage.js';
import Product from './components/Product.js';
import Forms from './components/Forms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container-fluid'>
          <div className='row search'>
            <SearchBar />
            <Routes>
              <Route path='/Forms' element={<Forms />} />
            </Routes>

          </div>
          <div className='row ' style={{ marginTop: "12px" }}>
            <Offerpage />
          </div>
          <div className='row '>
            <Slideshow />

          </div>
          <div className='row'>
            <Product />
            <br />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        {/* <div className='row'>
          <Forms />

        </div> */}

      </BrowserRouter>
    </>
  );
}

export default App;
