import React from "react"
import HooksDemo from "./components/hooks-demo"
import OldSchoolDemo from "./components/old-school"

import "./_style.scss"

const App = () => {
  return (
    <div>
      <HooksDemo />
      <hr />
      <OldSchoolDemo />
    </div>
  )
}

export default App
