import React, {Component} from 'react'
import './Dicent.css'

class Control extends Component{
    render(){
        return(
            <div className="Control" onClick={this.props.click}>
                Reset
            </div>
        )
    }
}
export default Control;