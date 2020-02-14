import React, { Component } from 'react'
import "../styles/Timer.scss"


class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: 0, 
        }
        this.passTime = this.passTime.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.passTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    passTime() {
        if(this.props.forfeit_status || this.props.gameWon()) return
        this.setState({ time: this.state.time+1 })
    }

    padNumber(number) {
        if(number<100 ) return ("0"+number).slice(-2)
    }

    render() {
        return (
            <div id="timer" className={this.props.forfeit_status ? "forfeit" : this.props.gameWon() ? "won" : ""}>
                 {this.padNumber(Math.floor(this.state.time / (60*60)) % 24)}:{this.padNumber(Math.floor(this.state.time / 60) % 60)}:{this.padNumber(this.state.time % 60)}
            </div>
        );
    
    }
} export default Timer;