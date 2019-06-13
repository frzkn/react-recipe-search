import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { default as Challenge1 } from "./Challenge1/components/App"
// import { default as Challenge2 } from "./Challenge2/components/App"
// import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Challenge1} />
        {/* <Route exact path="/challenge2" component={Challenge2} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
