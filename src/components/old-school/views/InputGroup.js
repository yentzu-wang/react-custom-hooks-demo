import React, { Component } from "react"
import { connect } from "react-redux"
import classnames from "classnames"
import { updateAddress, updateName } from "../actions"

class InputGroup extends Component {
  state = { value: "", focus: false }

  render() {
    const { fieldName } = this.props

    return (
      <div className="demo__input-group">
        <label className="demo__input-group__label">{fieldName}:</label>
        <input
          className={classnames("demo__input-group__input", {
            "demo__input-group__input--focus": this.state.focus
          })}
          type="text"
          value={
            fieldName.toLowerCase() === "name"
              ? this.props.name
              : this.props.address
          }
          onChange={e => {
            if (fieldName.toLowerCase() === "name") {
              this.props.updateName(e.target.value)
            } else {
              this.props.updateAddress(e.target.value)
            }
          }}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
        />
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

const mapDispatchToProps = {
  updateAddress,
  updateName
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGroup)
