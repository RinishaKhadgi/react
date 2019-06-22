import React, { Component } from 'react';
import Select from 'react-select';
// import '../../node_modules/react-select/dist/react-select.css';

class Sform extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      selectedField: {},
      selectedPosition: {}
    };

    this.onSubmit = this.onSubmit.bind(this)
  }

  handleFieldChange = (selectedField) => {
    this.setState({selectedField});
  };

  handlePositionChange = (selectedPosition) => {
    this.setState({selectedPosition})
  }

  onSubmit(e){
    e.preventDefault();
    this.props.history.push(`/audiorecord?field_id=${this.state.selectedField.value}&position_id=${this.state.selectedPosition.value}`)

    // If selected both then push to audiorecord page.

  }

  render() {
    const fields = [
      {value: '3', label: 'Accounting'},
      {value: '2', label: 'Health Care'},
      {value: '1', label: 'Information Technology'}
    ];

    const positions = [
      {value: '6', label: 'Accountant', link: '3'},
      {value: '7', label: 'Auditor', link: '3'},
      {value: '8', label: 'Tax Accountant', link: '3'},
      {value: '5', label: 'Nurse Practitioner', link: '2'},
      {value: '2', label: 'Data Analyst', link: '1'},
      {value: '3', label: 'Project Manager', link: '1'},
      {value: '1', label: 'Python Developer', link: '1'},
      {value: '4', label: 'Quality Analyst', link: '1'}
    ];

    const filteredPositions = positions.filter((position) => position.link === this.state.selectedField.value)

    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
            <form onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Update your information!</h1>
                  <div className="form-group">
                  <label htmlFor="field">Field</label>
                  <Select
                    name="form-field-name"
                    value={this.state.selectedField.value}
                    onChange={this.handleFieldChange}
                    options={fields} required
                  />
                  </div>
                  <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <Select
                    name="form-field-name"
                    value={this.state.selectedPosition.value}
                    onChange={this.handlePositionChange}
                    options={filteredPositions} required
                  />
                  </div>
                  <button type="submit"
                      className="btn btn-lg btn-primary btn-block">
                      Submit
                  </button>
            </form>
            </div>
          </div>
       </div>
    );
  }
}

export default Sform


// import React, { Component } from "react";

// import Select from 'react-select';
// import '../../node_modules/react-select/dist/react-select.css';
// // import Button from "../components/Button";

// class Sform extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//       positionOptions:["Accountant", "Auditor", "Tax Accountant"],
//       fieldOptions: ["Accounting", "Health Care", "Information Technology"],

//       positionOptionsValues: {
//         "Accounting": [
//           "Accountant", "Auditor", "Tax Accountant"
//         ],
//         "Health Care": [
//           "Nurse Practitioner"
//         ],
//         "Information Technology": [
//           "Data Analyst", "Project Manager", "Python Developer", "Quality Analyst"
//         ]
//       }
//     };

//     this.onFormSubmit = this.onFormSubmit.bind(this);

//   }


//   onFormSubmit(e){
//     e.preventDefault()

//      const user = {
//           fieldOptions: this.state.fieldOptions,
//           positionOptionsValues: this.state.positionOptionsValues
//         }



//   }

//   handleFieldChange(e){
//     // console.log(e.target.value);
//     this.setState({
//       positionOptions: this.state.positionOptionsValues[e.target.value]
//     })
//   }


//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//             <div className="col-md-6 mt-5 mx-auto">
//             <h1 className="h3 mb-3 font-weight-normal">Update your information!</h1>
//       <form className="container-fluid select-position-form" onSubmit={this.onFormSubmit}>
//         <Select
//           title={"Field"}
//           name={"field"}
//           options={this.state.fieldOptions}
//           placeholder={"Select Field"}
//           handleChange={(e) => this.handleFieldChange(e)}
//         />



//         <Select
//           title={"Position"}
//           name={"position"}
//           options={this.state.positionOptions}
//           placeholder={"Select Position"}
//           handleChange={this.handleInput}
//         />

//         {/* <button
//           action={this.handleFormSubmit}
//           type={"primary"}
//           title={"Submit"}
//           style={buttonStyle}
//         /> */}
//       </form>
//       </div>
//       </div>
//       </div>
//     );
//   }
// }

// const buttonStyle = {
//   margin: "10px 10px 10px 10px"
// };

// export default Sform;
