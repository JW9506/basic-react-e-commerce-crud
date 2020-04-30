import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import App from "App"

import { store } from "reduxStore"

import Header from "components/Header/Header"
import HomePage from "pages/HomePage/HomePage"
import CartPage from "pages/CartPage/CartPage"
import LoginPage from "pages/LoginPage/LoginPage"
import ProductPage from "pages/ProductPage/ProductPage"

import "index.scss"

const Root = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/products" component={ProductPage} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById("root"))
