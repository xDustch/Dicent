import React, {Component} from 'react'
import './Dicent.css'

class Dice extends Component{
    
    render(){
        return(
            <div className="Dice" onClick={this.props.click} style={{ backgroundColor: this.props.color }}>
                {this.props.text}
            </div>
        )
    }
}

export default Dice;