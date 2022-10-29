import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter from "./learn-useState/counter";
import Effect from "./learn-useEffect/index";
import Context from "./learn-useContext/index";
import Tugas from "./tugas/tugas1";
import NewHook from "./tugas/newHook";

export const RootContext = React.createContext();

function App() {
  const [data, setData] = React.useState([]);

  const ProviderContext = RootContext.Provider;

  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Use State</Link>
            </li>
            <li className="li">
              <Link to="/effect">Use Effect</Link>
            </li>
            <li className="li">
              <Link to="/context">Use Context</Link>
            </li>
            <li className="li">
              <Link to="/tugas">Tugas</Link>
            </li>
            <li className="li">
              <Link to="/newhook">Tugas NewHook</Link>
            </li>
          </ul>
        </nav>
        <ProviderContext
          value={{
            data: data,
            isiData: (isi) => setData(isi),
          }}
        >
          <Routes>
            <Route path="/" exact element={<Counter />} />
            <Route path="/effect" exact element={<Effect />} />
            <Route path="/context" exact element={<Context />} />
            <Route path="/tugas" exact element={<Tugas />} />
            <Route path="/newhook" exact element={<NewHook />} />
          </Routes>
        </ProviderContext>
      </div>
    </Router>
  );
}
export default App;
