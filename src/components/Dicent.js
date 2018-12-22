import React, {Component} from 'react'
import './Dicent.css'

import Dice from './Dice';
import Control from './Control';
import Display from './Display';

import dice from './dice.json';

const initial_state = {
    //dice count
    red: 0,
    blue : 0,
    yellow: 0,
    green: 0,
    brown: 0,
    grey: 0,
    black: 0,
    //attack/block count
    dmg: 0,
    surge: 0,
    range: 0,
    block: 0,
};

class Dicent extends Component{

    constructor(props){
        super(props)
        this.state = initial_state;
        this.addDice = this.addDice.bind(this);
        this.reset = this.reset.bind(this);
    }


    addDice(color){//increments dice count of variable color
        let side = Math.floor(Math.random() * 6);
        console.log(dice[color].side[side]);
        this.setState({
            [color]: this.state[color] + 1,
            block: this.state.block + dice[color].side[side].block,
            dmg: this.state.dmg + dice[color].side[side].dmg,
            surge: this.state.surge + dice[color].side[side].surge,
            range: this.state.range + dice[color].side[side].range //use dice color and side rolled to get data from json
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
                    <Dice click={this.addDice.bind(this,"red")} text={this.state.red} color="#D11D05"/>
                    <Dice click={this.addDice.bind(this,"blue")} text={this.state.blue} color="#1D1075"/>
                    <Dice click={this.addDice.bind(this,"green")} text={this.state.green} color="#1A5E25"/>
                    <Dice click={this.addDice.bind(this,"yellow")} text={this.state.yellow} color="#FB1"/>
                    <Dice click={this.addDice.bind(this,"brown")} text={this.state.brown} color="#7A2D15"/>
                    <Dice click={this.addDice.bind(this,"grey")} text={this.state.grey} color="#666"/>
                    <Dice click={this.addDice.bind(this,"black")} text={this.state.black} color="#011"/>
                </div>
                <div className="display-container">
                    <Display dmg={this.state.dmg} surge={this.state.surge} range={this.state.range} block={this.state.block}/>
                    <Control click={this.reset}/>
                </div>

            </div>
        )
    }
}

export default Dicent;