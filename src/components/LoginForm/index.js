// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isValue: false, text: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    console.log(history)
    history.replace('/')
  }

  getResult = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.error_msg)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({isValue: true, text: data.error_msg})
    }
  }

  getName = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, isValue, text} = this.state

    return (
      <div className="login-bg-container">
        <div className="form-con2">
          <img
            className="login-img2"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
        </div>
        <div className="con2">
          <img
            className="login-img1"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <form className="login-con1" onSubmit={this.getResult}>
          <div className="form-con1">
            <img
              className="login-img2"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
          </div>
          <label className="login-label1" htmlFor="label1">
            USERNAME
          </label>
          <input
            className="login-input1"
            type="text"
            id="label1"
            value={username}
            placeholder="Username"
            onChange={this.getName}
          />

          <label className="login-label1" htmlFor="label2">
            PASSWORD
          </label>
          <input
            className="login-input1"
            type="password"
            id="label2"
            value={password}
            placeholder="Password"
            onChange={this.getPassword}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
          {isValue && <p className="p11">*{text}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
