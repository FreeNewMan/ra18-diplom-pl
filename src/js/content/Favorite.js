import React  from 'react';
import {StoreApi} from '../tools/StoreApi.js';
import { Link } from 'react-router-dom';
import Product from './Product.js';
import Pager from './Pager.js';
import Sorter from './Sorter.js';

import '../../css/style-order.css';
import '../../css/style-catalogue.css';
import '../../css/style-favorite.css';


class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favItems: [],
      favItemsObjects: [],
      pages: 1,
      queryParams: {sortBy: 'price',
                    page: 1
                       }
    }
  

  }
  
  componentDidMount () {
     this.getData ();
   } 
 

  getData () {
    let favItems = JSON.parse(localStorage.getItem('favitems')) || [];
    if  (favItems.length > 0) {
       let params = this.state.queryParams;
       params.id = favItems
       this.setState({queryParams: params});
       StoreApi.getProducts(params).then((jsonData) => {
      if (jsonData.status === 'ok') { 
       this.setState({favItems: favItems});
       this.setState({ favItemsObjects: jsonData.data });
       this.setState({ pages: jsonData.pages });
       console.log(this.state.favItemsObjects);
      };
    });  
    }
  }


  render() {
    return (
       <div className="wrapper wrapper_favorite">
         <div className="site-path">
           <ul className="site-path__items">
             <li className="site-path__item"><a href="index.html">Главная</a></li>
             <li className="site-path__item"><a href="favorite.html">Избранное</a></li>
           </ul>
         </div>

         <main className="product-catalogue product-catalogue_favorite">
           <section className="product-catalogue__head product-catalogue__head_favorite">
             <div className="product-catalogue__section-title">
               <h2 className="section-name">В вашем избранном {this.state.favItems.length > 0 ? '' : ' пока ничего нет'}</h2>
                 { this.state.favItems.length > 0 ? <span className="amount amount_favorite"> {this.state.favItems.length} товаров</span> : ''} 
             </div>
             { this.state.favItems.length > 0 ? <Sorter onChange={this.changeSort} context={this} />   : '' }

           </section>
           <section className="product-catalogue__item-list product-catalogue__item-list_favorite">
              {this.state.favItemsObjects ? this.state.favItemsObjects.map((item) => <Product key={item.id} item={item} favlist={this}/>) : ''}
           </section>
           
           { this.state.pages ? <Pager curpage={this.state.queryParams.page} pages={this.state.pages} context={this}/> : ''}

         </main>
       </div> 
    );
  }
}
 
export default Favorite;