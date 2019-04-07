import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import kasjer from './reducers/kasjerReducer';
import customerManager from './reducers/customerReducer';
import operationManager from './reducers/operationReducer';
import Customers from './components/customers';
import Leszek from './components/leszek';
import { createLogger } from 'redux-logger'


const reducers = combineReducers({
  kasa: kasjer,
  customers: customerManager,
  operation: operationManager
});

const logger = createLogger({
  // ...options
});

const bank = createStore(reducers, applyMiddleware(logger));

bank.subscribe(() => {
  console.log(bank.getState());
})

class App extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
      <div>
        <Customers />
        <div>
          FLORYDA
          <Leszek />
        </div>

      </div>
     )
   }

   componentDidUpdate() {
     console.log(bank.getState());
     bank.getState();
   }
 }

document.addEventListener("DOMContentLoaded", function(){

   ReactDOM.render(
     <Provider store={bank}>
       <App />
     </Provider>,
     document.querySelector('#app')
   )
 })
