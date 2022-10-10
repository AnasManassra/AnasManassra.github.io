

import Header from './components/Header';
import Searchfilter from './components/Searchfilter';
import Cards from './components/Cards';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Details from './components/Details';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<><Searchfilter/> <Cards/></>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
