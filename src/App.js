import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Tour from './pages/Tour/Tour';
import Transfer from './pages/Transfer/Transfer';
import TourCat from './pages/TourCat/TourCat';

function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Main/>}/>
          <Route path=":categoryId" element={<TourCat/>}/>
        </Route>
        <Route path="/transfer" element={<Transfer/>}/>
        <Route path='/tours/:id' element={<Tour/>}/>
      </Routes>
  );
}

export default App;
