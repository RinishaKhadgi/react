import React, { Component } from 'react'
import './expert.css';

class Expert extends Component {
  render() {
    return (
      <div className="container">
        <h3>Dashboard</h3>
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
        <button type="submit"
        className="btn btn-lg btn-primary">
            Submit
        </button>
      </div>
    );
  }
}

export default Expert
