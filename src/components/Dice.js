import React, {Component} from 'react'
import './Dicent.css'

class Dice extends Component{
    
    render(){
        return(
            <div className="Dice" onClick={this.props.click}>
                {this.props.text}
            </div>
        )
    }
}

export default Dice;