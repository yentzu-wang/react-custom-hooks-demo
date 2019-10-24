import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import OldSchoolDemo from "./views/OldSchoolDemo"
import reducer from "./reducer"

const reducers = combineReducers({
  demo: reducer
})

const store = createStore((state, action) => {
  return reducers(state, action)
}, {})

export default function() {
  return (
    <Provider store={store}>
      <OldSchoolDemo />
    </Provider>
  )
}
