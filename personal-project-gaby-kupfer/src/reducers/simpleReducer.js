export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
      case "CHANGE_USERNAME":
        return {
          ...state,
          username: action.payload
        }
      default:
        return state
  }
}