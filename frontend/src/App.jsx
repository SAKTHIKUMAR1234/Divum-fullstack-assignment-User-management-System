import Home from "./pages/Home";
import Add from './pages/Add'
import Edit from "./pages/Edit";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom" 
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/add" element={<Add/>}/>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </Router>
  );

}

export default App
