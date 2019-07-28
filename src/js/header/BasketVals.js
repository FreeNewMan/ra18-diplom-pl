import React from 'react';
import {Link} from 'react-router-dom';
import {StoreApi, CartApi} from '../tools/StoreApi.js';

/*const basketItems = [
  {id: '1', img: 'img/product-list__pic_1.jpg', url: '/', name: 'Ботинки женские, Baldinini', price: '12 360'},
  {id: '2', img: 'img/product-list__pic_1.jpg', url: '/', name: 'Ботинки женские, Baldinini', price: '12 360'},
  {id: '3', img: 'img/product-list__pic_1.jpg', url: '/', name: 'Ботинки женские, Baldinini', price: '12 360'}
]
*/

const BasItem = (props) => (
  <div className='product-list__item'>
    <a className='product-list__pic'>
      <img src={ props.obj ? props.obj.images[0] : ''} alt='product'/></a>
    <Link to={`/product/${props.item.id}`} className='product-list__product'>
       {props.obj ? props.obj.title : ''} ( размер {props.item.size} ) { props.item.amount > 1 ? ', '+props.item.amount+' шт' : '' }
      </Link>
    <div className='product-list__fill'></div>
    <div className='product-list__price'>{props.obj ? props.obj.price * props.item.amount : '' }
      <i className='fa fa-rub' aria-hidden='true'></i>
    </div>
    <div className='product-list__delete' onClick={() => props.context.removeFromCart(props.item.id, props.item.size)}>
      <i className='fa fa-times' aria-hidden='true'></i>
    </div>
  </div>
  );


class BasketVals extends React.Component {
 constructor(props) {
   super(props);
    this.state = {
      basketItems: [],
      productObjects: []
    }
  this.removeFromCart = this.removeFromCart.bind(this);
 }

 componentDidMount () {
    this.getData();
  }

  getObj(id) {
    return this.state.productObjects.filter(function(ele){return ele.id === id})[0]
  }

 getData () {
    CartApi.getCartItems().then((jsonData) => {
      if (jsonData.status === 'ok') { 
        this.setState({ basketItems: jsonData.data.products });
         let productIds = this.state.basketItems.map(item => item.id);
         productIds =  [...new Set(productIds)];
          let params = {id: productIds };
          StoreApi.getProducts(params).then((jsonData) => {
            if (jsonData.status === 'ok') { 
             this.setState({ productObjects: jsonData.data });
           // console.log(this.state.productObjects);
             } ;
          });         
      };
    });   
 }

 removeFromCart (id, size) {
      let prm = { id: id, size: size, amount: 0  };
      console.log(prm);
      CartApi.ToCart(prm).then((jsonData) => {
        console.log(jsonData);
        if (jsonData.status === 'ok') { 
            localStorage.setItem('cartId', jsonData.data.id); 
            console.log(jsonData.data.id)
           this.getData();
         };
       });   

 }


  render() {
    return (
      <div className={`hidden-panel__basket basket-dropped ${this.props.visibleBasket}`}>
        <div className='basket-dropped__title'>В вашей корзине:</div>
        <div className='basket-dropped__product-list product-list'>
          {this.state.basketItems && this.state.productObjects ? this.state.basketItems.map((item, idx) => 
            <BasItem key={idx} item={item} obj={this.getObj(item.id)} context={this}/>
            ) : ''}
        </div>
        <Link className='basket-dropped__order-button' to='/order'>Оформить заказ</Link>
      </div>
    );
  }
}
 
export default BasketVals;


