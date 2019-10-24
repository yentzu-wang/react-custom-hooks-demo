import React, { useContext } from "react"
import classnames from "classnames"
import HooksContext from "../HooksContext"

const InputGroup = ({ fieldName }) => {
  const {
    [fieldName.toLowerCase()]: { focus, ...formInput }
  } = useContext(HooksContext)

  return (
    <div className="demo__input-group">
      <label className="demo__input-group__label">{fieldName}:</label>
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
