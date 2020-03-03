import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      position: '',
      floor: '',
      lab: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    console.log(e.target.name+" "+e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      position: this.state.position,
      lab: this.state.lab,
      floor: this.state.floor,

    }
    console.log(newUser)
    register(newUser).then(res => {

      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <Card class="card">
              <CardContent>
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                  <div className="form-group">
                    <label htmlFor="name">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter your first name"
                      value={this.state.first_name}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter your last name"
                      value={this.state.last_name}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>

                  {/* <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input
                      type="position"
                      className="form-control"
                      name="position"
                      placeholder="Choose Position"
                      value={this.state.position}
                      onChange={this.onChange}
                    />
                  </div> */}

                  <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <Select
                      type="position"
                      className="form-control"
                      name="position"
                      placeholder="Choose Position"
                      value={this.state.position}
                      onChange={this.onChange}
                    >
                      <MenuItem value="space">Space User</MenuItem>
                      <MenuItem value="admin">Admin </MenuItem>
                    </Select>
                  </div>

                  {/* <div className="form-group">
                    <label htmlFor="floor">Floor</label>
                    <input
                      type="floor"
                      className="form-control"
                      name="floor"
                      placeholder="Choose Floor"
                      value={this.state.floor}
                      onChange={this.onChange}
                    />
                  </div> */}

                  <div className="form-group">
                    <label htmlFor="floor">Floor</label>
                    <Select
                      type="floor"
                      className="form-control"
                      name="floor"
                      placeholder="Choose Floor"
                      value={this.state.floor}
                      onChange={this.onChange}
                    >
                      <MenuItem value="0">Ground Floor</MenuItem>
                      <MenuItem value="1">1st Floor</MenuItem>
                      <MenuItem value="2">2nd Floor</MenuItem>
                      <MenuItem value="3">3rd Floor</MenuItem>
                    </Select>
                  </div>



                  <div className="form-group">
                    <label htmlFor="lab">Lab</label>
                    <input
                      type="lab"
                      className="form-control"
                      name="lab"
                      placeholder="Choose Lab"
                      value={this.state.lab}
                      onChange={this.onChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Register!
              </button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    )
  }
}

export default Register