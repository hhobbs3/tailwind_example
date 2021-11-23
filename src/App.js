import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/away">
            <Away />
          </Route>
        </Switch>
        <p className="bg-red-400" >Hello Tailwind</p>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
        <div className="m-4">
        <div className="h-48 flex flex-wrap content-start">
          <div className="bg-red-500 w-1/3 bg-repeat-round">ABC</div>
          <div className="bg-yellow-200  w-1/3 text-center origin-center">DEF</div>
          <div className="bg-blue-600 w-1/3 text-white">GHI</div>
          <div className="w-1/3">Testing 1</div>
          <div className="w-1/3">Testing 2</div>
          <div className="w-1/3">Testing 3</div>
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
