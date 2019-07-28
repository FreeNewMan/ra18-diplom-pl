import React from 'react';
import BasketVals from './BasketVals.js';
import {Link} from 'react-router-dom';

const HiddenPanel = (props) => (
  <div className={`header-main__hidden-panel hidden-panel ${props.visiblePanel}`}>
    <div className="wrapper">
      <div className={`hidden-panel__profile ${props.visibleProfile}`}>
        <a href="#">Личный кабинет</a>
         <Link to="/favorite" onClick={()=>props.updateVisibleProfile()}>
          <i className="fa fa-heart-o" aria-hidden="true" ></i>Избранное
         </Link> 
        <a href="#">Выйти</a>
      </div>
      <BasketVals visibleBasket={props.visibleBasket} />
    </div>
  </div>  
    );
 
export default HiddenPanel;
