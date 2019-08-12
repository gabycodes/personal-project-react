export const handleChangeUsername = e => {
  console.log(e.target.value)
  return {
    type: "CHANGE_USERNAME",
    payload: e.target.value,
  }
}