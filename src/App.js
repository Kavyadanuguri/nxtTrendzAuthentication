import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'

const App = props => {
  const {appDetails} = props
  console.log(appDetails)

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={LoginForm} />

        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
