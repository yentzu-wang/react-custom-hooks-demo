import React, { Component } from "react"
import classnames from "classnames"

class InputGroup extends Component {
  state = { value: "", focus: false }

  render() {
    const { fieldName } = this.props

    return (
      <div className="demo__input-group">
        <label className="demo__input-group__label" for="film">
          {fieldName}:
        </label>
        <input
          className={classnames("demo__input-group__input", {
            "demo__input-group__input--focus": this.state.focus
          })}
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
        />
      </div>
    )
  }
}

export default InputGroup
