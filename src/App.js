

import Header from './components/Header';
import Searchfilter from './components/Searchfilter';
import Cardgrid from './components/Cardgrid';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Details from './pages/Details';
import Homepage from './pages/Homepage';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
