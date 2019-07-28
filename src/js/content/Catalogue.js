import React from 'react';
import {StoreApi} from '../tools/StoreApi.js';
import Product from './Product.js';
import Pager from './Pager.js';
import Sorter from './Sorter.js';
import SideBar from './Sidebar.js';

import '../../css/style-catalogue.css';


class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      minPrice: 0,
      maxPrice: 0,
      pages: 1,
      queryParams: {sortBy: 'price',
                             page: 1,
                             ...this.props.location.params
                                   }             
    }
  }

  componentDidMount () {
     this.getData ();  
  }


  getData () {
    StoreApi.getProducts(this.state.queryParams).then((jsonData) => {
      if (jsonData.status === 'ok') { 
        this.setState({ minPrice:  Math.min.apply(Math, jsonData.data.map(function(o) { return o.price ; })) });
        this.setState({ maxPrice:  Math.max.apply(Math, jsonData.data.map(function(o) { return o.price ; })) });
        this.setState({ products: jsonData.data });
        this.setState({ pages: jsonData.pages });
       };
    });     
  }



  render() {
    return (
    <div>
    {/*-- Каталог товаров --*/}
    {/*-- Breadcrumbs --*/}
    <div className="site-path">
      <ul className="site-path__items">
        <li className="site-path__item"><a href="index.html">Главная</a></li>
        <li className="site-path__item"><a href="#">Женская обувь</a></li>
      </ul>
    </div>
    {/*-- Тело каталога с сайдбаром --*/}
    <main className="product-catalogue">
       <SideBar context={this}/>
    {/*-- Основной контент каталога -->*/}
      <section className="product-catalogue-content">
        {/*-- Голова каталога с названием раздела и сортировкой --*/}
        <section className="product-catalogue__head">
          <div className="product-catalogue__section-title">
            <h2 className="section-name">Женская обувь</h2><span className="amount">{ this.state.products.length} товара</span>
          </div>
             { this.state.products.length > 0 ? <Sorter onChange={this.changeSort} context={this} />   : '' }
        </section>
        {/* Список товаров каталога */}
        <section  className="product-catalogue__item-list">
          {/*-- Товары --*/}
           {this.state.products ? this.state.products.map((item) => <Product key={item.id} item={item} fromCat />) : null}

        </section>
        {/*-- Пагинация под каталогом --*/}
         { this.state.pages ? <Pager curpage={this.state.queryParams.page} pages={this.state.pages} context={this} /> : ''}

      </section>
    </main>
    {/*-- Слайдер внизу каталога --*/}
    <section className="product-catalogue__overlooked-slider">
      <h3>Вы смотрели:</h3>
      <div className="overlooked-slider">
        <div className="overlooked-slider__arrow overlooked-slider__arrow_left arrow"></div>
        <div className="overlooked-slider__item overlooked-slider__item-1">
          <a href="product-card-desktop.html"></a>
        </div>
        <div className="overlooked-slider__item overlooked-slider__item-2">
          <a href="product-card-desktop.html"></a>
        </div>
        <div className="overlooked-slider__item overlooked-slider__item-3">
          <a href="product-card-desktop.html"></a>
        </div>
        <div className="overlooked-slider__item overlooked-slider__item-4">
          <a href="product-card-desktop.html"></a>
        </div>
        <div className="overlooked-slider__item overlooked-slider__item-5">
          <a href="product-card-desktop.html"></a>
        </div>
        <div className="overlooked-slider__arrow overlooked-slider__arrow_right arrow"></div>
      </div>
    </section>
    </div>
    );
  }
}
 
export default Catalogue;
