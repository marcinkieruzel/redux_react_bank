import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Customer from './customer';

class Customers extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.createClient(this.x.value)
    }

   render(){
     console.log(this.props);

     if(!this.props.accounts) {
       return null;
     }

     let customers = this.props.accounts.map((e,i) => {
       return <Customer data={e} key={i}/>
     });


     return (
      <div>
        Customers
        <ul>
          {customers}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input ref={x => this.x = x} type="text"/>
          <button type="submit">dodaj klienta</button>
        </form>
      </div>

     )
   }
 }

function mapStateToProps(state) {
  return {
    accounts: state.customers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createClient: function(data) {
      dispatch({type: "CREATE_ACCOUNT", payload: {id: data, clientBalance: 0}})
    }
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Customers)
