
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import ListItems from './pages/ListItems/ListItems';
import Details from './pages/Details/Details';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/items" element={<ListItems />} />
          <Route path="/items/:id" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
