export default function operation(state = {"Maciek": {withdraw: 0, deposite: 0 }}, action) {
console.log(action.payload);
  switch(action.type) {
    case "BALANCE_CHANGE":
    return {...state, ...action.payload}
    break;
    case "CREATE_ACCOUNT":
    return {...state, [action.payload.id]: {withdraw: 0, deposite: 0 }}
    break;
  }

  return state;
}
