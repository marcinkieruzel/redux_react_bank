export default function customer(state = [{id: "Maciek", clientBalance: 0}], action) {
  switch(action.type) {
    case "CREATE_ACCOUNT":
    return [...state, action.payload]
    break;
    case "UPDATE_BALANCE":
    var client = state.find((val) => val.id == action.payload.id);
    console.log("Klient", client);

    if(!client) {
      return state;
    }

    var data = {...client, clientBalance: client.clientBalance + action.payload.amount}

    return [...state.filter((val) => val.id != action.payload.id), data];
  }
  return state;
}
