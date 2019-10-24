import React, { Component } from "react"
import InputGroup from "./InputGroup"

export default class OldSchoolDemo extends Component {
  render() {
    return (
      <div className="demo">
        Class:
        <InputGroup fieldName="Name" />
        <InputGroup fieldName="Address" />
        <button onClick={() => alert("test")}>Get Data</button>
      </div>
    )
  }
}
