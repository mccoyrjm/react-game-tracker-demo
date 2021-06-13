import { ReactElement } from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom'
import Header from 'ui/organisms/Header'
import Footer from 'ui/organisms/Footer'
import Login from 'pages/Login'

const App = (): ReactElement => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
