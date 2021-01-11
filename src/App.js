import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/offer/:id" component={JobDetails} />
      </Switch>
    </Router>
  )
}

export default App
