import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ReactDOM from "react-dom"
import App from "App"
import HomePage from "pages/HomePage/HomePage"
import CartPage from "pages/CartPage/CartPage"
import LoginPage from "pages/LoginPage/LoginPage"
import Header from "components/Header/Header"
import "index.scss"

const Root = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </App>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"))
