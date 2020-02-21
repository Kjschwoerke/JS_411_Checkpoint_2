import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class App extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true; max-age=60*1000"
    window.location.replace("/")
  }

  render() {
    return (
      <div className="App">
        <Container className = "LoginForm" maxWidth="false">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              color = "secondary"
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" 
              />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="secondary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;