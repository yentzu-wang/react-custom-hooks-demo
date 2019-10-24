import React from "react"
import InputGroup from "./InputGroup"

const FormWrapper = () => {
  // 這邊用來模擬表單內很多重複的InputGroup，因此將重複的代碼做了組件化
  return (
    <form autoComplete="new-password">
      <InputGroup fieldName="Name" />
      <InputGroup fieldName="Address" />
    </form>
  )
}

export default FormWrapper
