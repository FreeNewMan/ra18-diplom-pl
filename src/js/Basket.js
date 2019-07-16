import React  from 'react';

const Basket = (props) => (
   <div className="header-main__pic header-main__pic_basket" onClick={()=>props.updateVisibleBasket()}>
     <div className="header-main__pic_basket_full">1</div>
     <div className="header-main__pic_basket_menu"></div>
   </div>
) ;        

export default Basket;