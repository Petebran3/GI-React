// medium

import React, { Component } from 'react'

class BasicInfo extends Component{
  
  constructor (props){
    super();
    this.state = {

    person: {
      name: props.name,
      age: props.age,
      dob: props.dob}
    }
    }
    rendor(){
      return(
        <div className='person'>
          <h1>{this.state.person.name}</h1>
          <h1>Age:{this.state.person.age}</h1>
          <h1>Dob:{this.state.person.dob}</h1>
          </div>
      );
    }
  }
export default BasicInfo;

