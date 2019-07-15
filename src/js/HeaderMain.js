import React, { Component } from 'react';

class HeaderMain extends Component {
 constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="header-main">
         <div className="header-main__wrapper wrapper">
           {this.props.children}
         </div>  
      </div>  
    );
  }
}


export default HeaderMain;
