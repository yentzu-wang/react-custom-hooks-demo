import React from "react"
import classnames from "classnames"

const InputGroup = ({ fieldName, data }) => {
  const { focus, ...formInput } = data

  return (
    <div className="demo__input-group">
      <label className="demo__input-group__label" for="film">
        {fieldName}:
      </label>
      <input
        className={classnames("demo__input-group__input", {
          "demo__input-group__input--focus": focus
        })}
        type="text"
        {...formInput}
      />
    </div>
  )
}

export default InputGroup
