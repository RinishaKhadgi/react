import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            full_name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const newUser = {
            full_name: this.state.full_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
                this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="full_name">Full Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="full_name"
                                    placeholder="Enter Full Name"
                                    value={this.state.full_name}
                                    onChange={this.onChange} required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChange} required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} required
                                />
                            </div>
                            <button type="submit"
                            className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
