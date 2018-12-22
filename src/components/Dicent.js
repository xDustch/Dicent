import React, {Component} from 'react'
import './Dicent.css'

import Dice from './Dice';
import Control from './Control';

class Dicent extends Component{

    constructor(props){
        super(props)
        this.state = {
            red_cant: 0,
            blue_cant : 0,
            yellow_cant: 0,
            green_cant: 0,
            brown_cant: 0,
            grey_cant: 0,
            black_cant: 0
        }
        this.addDice = this.addDice.bind(this);
        this.reset = this.reset.bind(this);
    }


    addDice(color){//increments dice count of each color
        console.log("hola")
        this.setState({
            [color]: this.state[color] + 1
        })
    }
    
    reset(){
        console.log("reset")
        this.setState({
            red_cant: 0,
            blue_cant: 0,
            yellow_cant: 0,
            green_cant: 0,
            brown_cant: 0,
            grey_cant: 0,
            black_cant: 0
        })
    }

    render(){
        return(
            <div className="Dicent">
                <div className="dice-container">
                    <Dice click={this.addDice.bind(this,"red_cant")} text={this.state.red_cant}/>
                    <Dice click={this.addDice.bind(this,"blue_cant")} text={this.state.blue_cant}/>
                    <Dice click={this.addDice.bind(this,"yellow_cant")} text={this.state.yellow_cant}/>
                    <Dice click={this.addDice.bind(this,"green_cant")} text={this.state.green_cant}/>
                    <Dice click={this.addDice.bind(this,"brown_cant")} text={this.state.brown_cant}/>
                    <Dice click={this.addDice.bind(this,"grey_cant")} text={this.state.grey_cant}/>
                    <Dice click={this.addDice.bind(this,"black_cant")} text={this.state.black_cant}/>
                </div>
                <div className="display-container">
                    <Control click={this.reset}/>
                </div>

            </div>
        )
    }
}

export default Dicent;