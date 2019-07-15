import React, { Component } from 'react';

class Header extends Component {
 constructor(props) {
    super(props);
  }


  render() {
    return (
      <header className="header">
        {this.props.children}
      </header>  
    );
  }
}


export default Header;
 