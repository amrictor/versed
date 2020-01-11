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
            <div id="sidebar" className={this.state.expanded ? " expanded" : ""}>
                
                <MenuIcon id="icon"  onClick={this.toggle}/>
               {this.state.expanded ? this.props.children : ""}
            </div>
        );
    
    }
} export default Sidebar;