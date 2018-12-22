import React, {Component} from 'react'
import './Dicent.css'

import Dice from './Dice'

class Dicent extends Component{
    render(){
        return(
            <div className="Dicent">
                <div className="dice-container">
                    <Dice/>
                    <Dice/>
                    <Dice/>
                    <Dice/>
                    <Dice/>
                    <Dice/>
                </div>

            </div>
        )
    }
}

export default Dicent;