import React, {Component} from 'react'
import './Dicent.css'

class Display extends Component{
    render(){
        return(
          this.props.fail ?

            <div className="Display">
                <h1><i className="fas fa-poo"></i></h1>
                <h1>MISS</h1>
                <h1><i className="fas fa-skull"></i></h1>
            </div>

            :

            <div className="Display">
                <h1>{this.props.dmg} <i className="fas fa-heart"></i></h1>
                <h1>{this.props.surge} <i className="fas fa-bolt"></i></h1>
                <h1>{this.props.range} <i className="fas fa-bullseye"></i></h1>
                <h1>{this.props.block} <i className="fas fa-shield-alt"></i></h1>
            </div>
        )
    }
}

export default Display;