import React, {Component} from 'react'
import './Dicent.css'

import Dice from './Dice';
import Control from './Control';
import Display from './Display';

const initial_state = {
    red_cant: 0,
    blue_cant : 0,
    yellow_cant: 0,
    green_cant: 0,
    brown_cant: 0,
    grey_cant: 0,
    black_cant: 0
};

class Dicent extends Component{

    constructor(props){
        super(props)
        this.state = initial_state;
        this.addDice = this.addDice.bind(this);
        this.reset = this.reset.bind(this);
    }


    addDice(color){//increments dice count of variable color
        console.log("hola")
        this.setState({
            [color]: this.state[color] + 1
        });
    }
    
    reset(){//resets state
        console.log("reset")
        this.setState(initial_state);
    }

    render(){
        return(
            <div className="Dicent">
                <div className="dice-container">
                    <Dice click={this.addDice.bind(this,"red_cant")} text={this.state.red_cant} color="#D11D05"/>
                    <Dice click={this.addDice.bind(this,"blue_cant")} text={this.state.blue_cant} color="#1D1075"/>
                    <Dice click={this.addDice.bind(this,"green_cant")} text={this.state.green_cant} color="#1A5E25"/>
                    <Dice click={this.addDice.bind(this,"yellow_cant")} text={this.state.yellow_cant} color="#FB1"/>
                    <Dice click={this.addDice.bind(this,"brown_cant")} text={this.state.brown_cant} color="#7A2D15"/>
                    <Dice click={this.addDice.bind(this,"grey_cant")} text={this.state.grey_cant} color="#666"/>
                    <Dice click={this.addDice.bind(this,"black_cant")} text={this.state.black_cant} color="#011"/>
                </div>
                <div className="display-container">
                    <Display/>
                    <Control click={this.reset}/>
                </div>

            </div>
        )
    }
}

export default Dicent;