export const updateName = name => {
  return {
    type: "UPDATE_NAME",
    payload: name
  }
}

export const updateAddress = address => {
  return {
    type: "UPDATE_ADDRESS",
    payload: address
  }
}
