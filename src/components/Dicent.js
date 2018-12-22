import React, {Component} from 'react'
import './Dicent.css'

import Dice from './Dice';
import Control from './Control';

class Dicent extends Component{

    constructor(props){
        super(props)
        this.state = {
            red_cant: 0,
            blue_cant : 0
        }
        this.addRed = this.addRed.bind(this);
        this.addBlue = this.addBlue.bind(this);
        this.reset = this.reset.bind(this);
    }


    addRed(){
        console.log("hola")
        this.setState({
            red_cant: this.state.red_cant + 1
        })
    }
    addBlue(){
        console.log("chau")
        this.setState({
            blue_cant: this.state.blue_cant + 1
        })
    }

    reset(){
        console.log("reset")
        this.setState({
            red_cant: 0,
            blue_cant: 0
        })
    }

    render(){
        return(
            <div className="Dicent">
                <div className="dice-container">
                    <Dice click={this.addRed} text={this.state.red_cant}/>
                    <Dice click={this.addBlue} text={this.state.blue_cant}/>
                    <Dice/>
                    <Dice/>
                    <Dice/>
                    <Dice/>
                </div>
                <div className="display-container">
                    <Control click={this.reset}/>
                </div>

            </div>
        )
    }
}

export default Dicent;