import React, {Component} from 'react'
import './Dicent.css'

class Display extends Component{
    render(){
        return(
          this.props.fail ?

            <div className="Display">
                <span className="icon" role="img" aria-label="emoji">💩</span><span className="icon" role="img" aria-label="emoji">💀</span><span className="icon" role="img" aria-label="emoji">💩</span>
                <h1>MISS</h1>
                <span className="icon" role="img" aria-label="emoji">💀</span><span className="icon" role="img" aria-label="emoji">💩</span><span className="icon" role="img" aria-label="emoji">💀</span>
            </div>

            :

            <div className="Display">
                <h1>{this.props.dmg} <span className="icon" role="img" aria-label="emoji">❤️</span></h1>
                <h1>{this.props.surge} <span className="icon" role="img" aria-label="emoji">⚡</span></h1>
                <h1>{this.props.range} <span className="icon" role="img" aria-label="emoji">🏹</span></h1>
                <h1>{this.props.block} <span  className="icon" role="img" aria-label="emoji">🛡️</span></h1>
            </div>
        )
    }
}

export default Display;