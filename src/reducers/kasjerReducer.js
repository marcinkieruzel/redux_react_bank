export default function kasjer(state = {balance: 0}, action) {

  console.log("Kasjer:", action.payload);
  switch(action.type) {
    case "UPDATE_BALANCE":
    return {balance: state.balance + Number(action.payload.amount)};
    break
  }
  return state;
}
