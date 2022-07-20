// Very easy
import React, {Component} from 'react'

class Class extends Component {
    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            <h1>{this.props.age}</h1>
            <h1>{this.props.dob}</h1>
            </>
        )
    }
}

export default Class;