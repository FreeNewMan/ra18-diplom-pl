import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {StoreApi} from './StoreApi.js';


function MenuItem(props) {
   return (
      <li className={`new-deals__menu-item ${props.active}`} onClick={() => {props.updateActive(props.item.id)} } >
         <Link to="#">{props.item.title}</Link>
      </li>
    );
}


class NewDeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      featured: [],
      categories: []
    }
  }

  componentDidMount () {
    StoreApi.getFeatured().then((jsonData) => {
      if (jsonData.status == 'ok') { 
        this.setState({ featured: jsonData.data });
      };
    });     

    StoreApi.getCategories().then((jsonData) => {
      if (jsonData.status == 'ok') { 
        this.setState({ categories: jsonData.data });
        this.setState({ active: jsonData.data[0].id });
      };
    });     

  }


 updateActive = (value) => {
   this.setState({ active: value })
 }


  render() {
   console.log(this.state.featured);
   console.log(this.state.categories.map((item) => item.id));
    return (
    <section className="new-deals wave-bottom">
      <h2 className="h2">Новинки</h2>
      <div className="new-deals__menu">
        <ul className="new-deals__menu-items">
          {this.state.categories.map((item) => <MenuItem key={item.id} item={item} updateActive={this.updateActive} active={item.id == this.state.active ? 'new-deals__menu-item_active' : '' }/>)}
        </ul>
      </div>
   
      <div className="new-deals__slider">
        <div className="new-deals__arrow new-deals__arrow_left arrow"></div>
        
        <div className="new-deals__product new-deals__product_first">
          <a href="#"></a>
        </div>

        <div className="new-deals__product new-deals__product_active">
          <a href="catalogue.html"></a>
          <div className="new-deals__product_favorite"></div>
        </div>
        
        <div className="new-deals__product new-deals__product_last">
          <a href="#"></a>
        </div>
        
        <div className="new-deals__arrow new-deals__arrow_right arrow"></div>
      </div>
      
      <div className="new-deals__product-info">
        <a href="product-card-desktop.html" className="h3">Босоножки женские</a>
        <p>Производитель:
          <span>Damlax</span>
        </p>
        <h3 className="h3">5 950 ₽</h3>
      </div>
      
    </section>
    );
  }
}
 
export default NewDeals;


