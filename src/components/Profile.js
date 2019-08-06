import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      full_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      full_name: decoded.identity.full_name,
      email: decoded.identity.email
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{this.state.full_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Results</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Question</td>
                <td>Confidence_level</td>
              </tr>
              <tr>
                <td>1</td>
                <td>80-100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>60-80</td>
              </tr>
              <tr>
                <td>3</td>
                <td>60-80</td>
              </tr>
              <tr>
                <td>4</td>
                <td>40-60</td>
              </tr>
              <tr>
                <td>5</td>
                <td>60-100</td>
              </tr>
              <tr>
                <td>6</td>
                <td>80-100</td>
              </tr>
              <tr>
                <td>7</td>
                <td>80-100</td>
              </tr>
              <tr>
                <td>8</td>
                <td>80-100</td>
              </tr>
              <tr>
                <td>9</td>
                <td>80-100</td>
              </tr>
              <tr>
                <td>10</td>
                <td>80-100</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
