import React from "react"
import InputGroup from "./InputGroup"
import { useFormInput } from "../hooks"

const HooksDemo = () => {
  const name = useFormInput("")
  const address = useFormInput("")

  return (
    <div className="demo">
      Hooks:
      <InputGroup fieldName="Name" data={name} />
      <InputGroup fieldName="Address" data={address} />
      <button onClick={() => alert("test")}>Get Data</button>
    </div>
  )
}

export default HooksDemo
