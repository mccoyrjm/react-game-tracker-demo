import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from 'styles/globalStyles'
import Header from 'ui/organisms/Header'
import Footer from 'ui/organisms/Footer'
import Login from 'pages/Login'
import { Container, Main } from './subcomponents'

const App = (): ReactElement => (
  <Router>
    <GlobalStyle />
    <Container>
      <Header />
      <Main>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Container>
  </Router>
)

export default App
