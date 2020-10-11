import React from 'react';
import {Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, MDBIcon} from 'mdbreact';
import { Link } from 'react-router-dom';
import { NavLink } from "../PublicWeb/Utils/Page/NavLink";
import { RenderIf } from '../PublicWeb/Utils/RenderIf';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
    this.LogOff = this.LogOff.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  LogOff() {
    localStorage.removeItem("user");
  }

  render() {
    return (
      <Navbar className="navbar navbar-dark navbar-expand-lg fixed-top cardLoggedIn" id="mainNav" style={{zIndex:1}}>
        <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/pr/main">GPS registration</Link>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left className="nav-item">
            <NavItem>
                <span onClick={()=>this.onClick()}>
                    <NavLink to="/pr/vehicles">
                        <b>Vehicles</b>
                    </NavLink>
                </span>
            </NavItem>
            <NavItem>
                <span onClick={()=>this.onClick()}>
                    <NavLink to="/pr/keys">
                        <b>API Keys</b>
                    </NavLink>
                </span>
            </NavItem>
            <NavItem> 
            <RenderIf isTrue={JSON.parse(localStorage.getItem('user')).role === "Admin"}>
              <span className="nav-item" onClick={()=>this.onClick()}>
                <NavLink to="/pr/users"><b>Users</b></NavLink>
              </span>
            </RenderIf>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
          <NavItem> 
            <span className="nav-item" onClick={()=>this.onClick()}>
                <NavLink to="/pr/profile" ><MDBIcon icon="user" /></NavLink>
            </span>
          </NavItem>
          <NavItem> 
            <span className="nav-item" onClick={()=>this.LogOff()}>
                <NavLink to="/login" ><MDBIcon icon="sign-out-alt" /></NavLink>
            </span>
            </NavItem>
          </NavbarNav>
        </Collapse>
        </div>
    </Navbar>
    );
  }
}

export default Navigation;
