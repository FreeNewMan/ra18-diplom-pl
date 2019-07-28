import React  from 'react';

class Basket extends React.Component {
   constructor(props) {
     super(props);
   }

  render () {
    return(
      <div className="header-main__pic header-main__pic_basket" onClick={()=>this.props.updateVisibleBasket()}>
         <div className="header-main__pic_basket_full">1</div>
         <div className="header-main__pic_basket_menu"></div>
       </div>
  	);
  }        
}

export default Basket;