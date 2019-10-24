import { useState } from "react"

export const useFormInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue)
  const [focus, setFocus] = useState(false)

  return {
    value,
    focus,
    onChange: e => setValue(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }
}
