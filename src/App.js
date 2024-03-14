import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Tour1 from './pages/Tours/Tour1/Tour1';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/tour1" element={<Tour1/>}/>
      </Routes>
    </Router>
  );
}

export default App;
