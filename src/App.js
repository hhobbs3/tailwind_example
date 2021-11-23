import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Away from "./pages/Away";
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div>
            <ul>
              <li><a><Link to ="/">Home</Link></a></li>
            </ul>
            <ul>
              <li><a><Link to ="/away">Away</Link></a></li>
            </ul>
          </div>
        </header>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/away" element={<Away/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
