import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Tour from './pages/Tour/Tour';
import Transfer from './pages/Transfer/Transfer';
import Recommended from './pages/Recommended/Recommended';
import Private from './pages/Private/Private';
import Excursions from './pages/Excursions/Excursions';
import Error from './pages/Error/Error';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/recommended-tours" element={<Recommended/>}/>
        <Route path="/private-tours" element={<Private/>}/>
        <Route path="/excursions" element={<Excursions/>}/>
        <Route path='/:categoryInfo/:id' element={<Tour/>}/>
        <Route path="/airport-transfer" element={<Transfer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
  );
}

export default App;
