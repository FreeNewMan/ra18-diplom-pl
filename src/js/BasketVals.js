import React from 'react';
import {Link} from 'react-router-dom';

const basketItems = [
  {id: '1', img: 'img/product-list__pic_1.jpg', url: '/', name: 'Ботинки женские, Baldinini', price: '12 360'},
  {id: '2', img: 'img/product-list__pic_1.jpg', url: '/', name: 'Ботинки женские, Baldinini', price: '12 360'},
  {id: '3', img: 'img/product-list__pic_1.jpg', url: '/', name: 'Ботинки женские, Baldinini', price: '12 360'}
]


const BasItem = (props) => (
  <div className='product-list__item'>
    <a className='product-list__pic'>
      <img src={props.item.img} alt='product'/></a>
    <Link to='/product' className='product-list__product'>{props.item.name}</Link>
    <div className='product-list__fill'></div>
    <div className='product-list__price'>{props.item.price}
      <i className='fa fa-rub' aria-hidden='true'></i>
    </div>
    <div className='product-list__delete'>
      <i className='fa fa-times' aria-hidden='true'></i>
    </div>
  </div>
  );


class BasketVals extends React.Component {

  render() {
    return (
      <div className={`hidden-panel__basket basket-dropped ${this.props.visibleBasket}`}>
        <div className='basket-dropped__title'>В вашей корзине:</div>
        <div className='basket-dropped__product-list product-list'>
          {basketItems.map((item) => <BasItem key={item.id} item={item}/> )}
        </div>
        <Link className='basket-dropped__order-button' to='/order'>Оформить заказ</Link>
      </div>
    );
  }
}
 
export default BasketVals;


