import React, { Component } from 'react'
import { FaBars as MenuIcon } from 'react-icons/fa'
import "../styles/Sidebar.scss"

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        return (
            <div id="sidebar" className={this.state.expanded ? " expanded" : "hidden"}>
                <div id="header">
                    <div id="title" className={this.state.expanded ? " expanded" : "hidden"}>{this.props.title}</div>                   
                    <div className="spacer"></div>
                    <MenuIcon id="icon" className={this.state.expanded ? "" : "icon-hidden"} onClick={this.toggle}/>
                </div>
                <div id="children" className={this.state.expanded ? " expanded" : "hidden"}>
                    {this.props.children}
                </div>
            </div>
        );
    
    }
} export default Sidebar;