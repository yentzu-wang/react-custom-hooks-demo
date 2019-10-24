import React from "react"
import FormWrapper from "./FormWrapper"
import { useFormInput } from "../hooks"
import HooksContext from "../HooksContext"

const HooksDemo = () => {
  const name = useFormInput("")
  const address = useFormInput("")
  const sharedContext = { name, address }

  return (
    <HooksContext.Provider value={sharedContext}>
      <div className="demo">
        Hooks:
        <FormWrapper />
        <button
          onClick={() =>
            alert(`name: ${name.value}, address: ${address.value}`)
          }
        >
          Get Data
        </button>
      </div>
    </HooksContext.Provider>
  )
}

export default HooksDemo
