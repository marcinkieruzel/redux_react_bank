import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Leszek extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (

      <h1>Jestem Leszek i ma na koncie: {this.props.amount.balance}</h1>

     )
   }
 }

 function mapStateToProps(state) {
   return {
     amount: state.kasa
   }

 }

export default connect(mapStateToProps)(Leszek)
