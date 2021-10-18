import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Donations from "./pages/Donations"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/donations" component={Donations} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
