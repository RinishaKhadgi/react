import React, { Component } from 'react'
import './Home.css'
import clock from '../clock.png'
//import confidence from '../confidence.png'
import confidence1 from '../confidence1.png'
import level from '../level.png'
//import logo from '../logo.png'
import soundwave from '../soundwave.png'

class Home extends Component {
    render () {
        return (
            <div className="home page">
                <div className="container">
                    <img src={soundwave} alt="home page logo" className="homelogo"></img>
                     <h1 className="appname">Saakshyatkaar Abhyasa</h1>
                    <p className="subhead">Explore a new way to prepare for your interview </p>
                </div>
                <div className="red-container">
                    <div className="container">
                        <h2>Our motto</h2>
                        <h4>Our tool helps users to</h4>
                        <ul>
                            <li>
                                <p>Practice on the basis of level</p>
                            </li>
                            <li>
                                <p>Gain confidence</p>
                            </li>
                            <li>
                                <p>Boost interview skills</p>
                            </li>
                            <li>
                                <p>Receive valuable feedback</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="gray-container">
                    <div className="container maincontainer">
                    <ul>
                        <li className="feature">
                            <figure>
                                <img src={clock} alt="timed questions"></img>
                                <figcaption>Timed questions</figcaption>
                            </figure>
                        </li>
                        <li class="feature">
                            <figure>
                                <img src={level} alt="user level"></img>
                                <figcaption>Questions according to your level</figcaption>
                            </figure>
                        </li>
                        <li class="feature">
                            <figure>
                                <img src={confidence1} alt="confidence"></img>
                                <figcaption>Check your confidence level</figcaption>
                            </figure>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class="container get-started">
                    <h2 class="start">Start practicing for your interview now</h2>
                    <a href="login" class="cta">Get Started</a>
                </div>
                <footer>
                <div class="footer-container">
                    <div class="container">
                        <p class="address">B.Sc.CSIT 7th Semester<br/>St. Xavier's College, Maitighar</p>
                        <ul class="footer-links">
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                </footer>
            </div>
        )
    }
}
export default Home
