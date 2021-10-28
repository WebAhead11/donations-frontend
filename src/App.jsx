import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import Donate from "./pages/Donate";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SearchForm from "./pages/searchForm";

import CopyrightIcon from "@mui/icons-material/Copyright";

function App() {
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [delivery, setDelivery] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/searchForm">
            <SearchForm
              setArea={setArea}
              setCategory={setCategory}
              setDelivery={setDelivery}
            />
          </Route>
          <Route path="/donations">
            <Donations kindOfList="myList" />
          </Route>
          <Route path="/search">
            <Donations kindOfList="search" />
          </Route>
          <Route path="/archive">
            <Donations kindOfList="archive" />
          </Route>
          <Route path="/donate" component={Donate} />
          <Route path="/SignIn" component={SignIn} />
        </Switch>
      </Router>
      <div className="App-footer">
        People for People&nbsp;<CopyrightIcon></CopyrightIcon>&nbsp;2021
      </div>
    </div>
  );
}

export default App;
