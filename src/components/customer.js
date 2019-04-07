import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Customer extends React.Component {

  handleChange = (e) => {
    this.props.sendOperation({...this.props.balance[this.props.data.id], [e.currentTarget.name] : e.currentTarget.value}, this.props.data.id)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateBalance(this.props.balance[this.props.data.id].deposite - this.props.balance[this.props.data.id].withdraw, this.props.data.id)
  }

   render(){
     return (
      <div>
        {this.props.data.id} | {this.props.data.clientBalance} PLN
        <form onSubmit={this.handleSubmit}>
          <label style={{display:"block"}} htmlFor="">Kwota wypłaty
            <input onChange={this.handleChange} value={this.props.balance[this.props.data.id].withdraw} type="text" name="withdraw" placeholder="wpłać"/>
          </label>

          <label style={{display:"block"}} htmlFor="">Kwota depozytu
            <input onChange={this.handleChange} value={this.props.balance[this.props.data.id].deposite} type="text" name="deposite" placeholder="wypłać"/>
          </label>


          <button>Dodaj</button>
        </form>
      </div>
     )
   }
 }

 function mapStateToProps(state) {
   return {
     balance: state.operation
   }
 }

 function mapDispatch(dispatch) {
   return {
     sendOperation: function(data, id) {
       dispatch({type: "BALANCE_CHANGE", payload: {[id]: data}})
     },
     updateBalance: function(data, id) {
       dispatch({type: "UPDATE_BALANCE", payload: {amount: data, id:id}})
     }
   }
 }

 export default connect(mapStateToProps, mapDispatch)(Customer);
