

import Header from './components/Header';
import Searchfilter from './components/Searchfilter';
import Cardgrid from './components/Cardgrid';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Details from './components/Details';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<><Searchfilter/> <Cardgrid/></>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
