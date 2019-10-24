import React, { Component } from "react"
import { connect } from "react-redux"
import FormWrapper from "./FormWrapper"

class OldSchoolDemo extends Component {
  render() {
    return (
      <div className="demo">
        Class:
        <FormWrapper />
        <button
          onClick={() =>
            alert(`name: ${this.props.name}, address: ${this.props.address}`)
          }
        >
          Get Data
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.demo.name,
    address: state.demo.address
  }
}

export default connect(mapStateToProps)(OldSchoolDemo)
