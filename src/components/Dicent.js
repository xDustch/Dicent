import React, {Component} from 'react'
import './Dicent.css'

import Dice from './Dice';

class Dicent extends Component{


    function(){
        console.log("hola")
    }
    function2(){
        console.log("chau")
    }

    render(){
        return(
            <div className="Dicent">
                <div className="dice-container">
                    <Dice clickhandler={this.function}/>
                    <Dice clickhandler={this.function2}/>
                    <Dice/>
                    <Dice/>
                    <Dice/>
                    <Dice/>
                </div>
                <div className="display-container">

                </div>

            </div>
        )
    }
}

export default Dicent;