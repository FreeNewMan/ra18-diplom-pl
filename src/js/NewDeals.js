import React from 'react';
import { Link } from 'react-router-dom';
import {StoreApi} from './StoreApi.js';


function MenuItem(props) {
   return (
      <li className={`new-deals__menu-item ${props.activeCat}`} onClick={() => {props.updateActive(props.item.id)} } >
         <Link to="#">{props.item.title}</Link>
      </li>
    );
}

function DealsHead(props) {
  return (
      <div>
        <h2 className="h2">Новинки</h2>
        <div className="new-deals__menu">
          <ul className="new-deals__menu-items">
            {props.categories.map((item) => <MenuItem key={item.id} item={item} updateActive={props.updateActive} activeCat={item.id === props.activeCat ? 'new-deals__menu-item_active' : '' }/>)}
         </ul>
        </div>
      </div>  
    );
}


class NewDeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCat: '',
      featured: [],
      filteredFeatures: [],
      categories: [],
      activeinds: [0,1,2]
    }
  }



  componentDidMount () {
   let activeCat;

    StoreApi.getCategories().then((jsonData) => {
      if (jsonData.status === 'ok') { 
        this.setState({ categories: jsonData.data });
        activeCat = jsonData.data[1].id;
      };
    });     

    StoreApi.getFeatured().then((jsonData) => {
      if (jsonData.status === 'ok') { 
        this.setState({ featured: jsonData.data });
        this.updateActive(activeCat); 
      };
    });     

  }



 updateActive = (value) => {
  console.log(this.state.featured)
   this.setState({ activeCat: value, 
                   filteredFeatures: this.state.featured.filter(obj => obj.categoryId == value),
                   activeinds: [0,1,2]
                 });
 }


 goLeft = () => {
    let arr = this.state.activeinds;
    let next = arr[0]-1;
    if (arr[0] === 0) { next = this.state.filteredFeatures.length-1};
    arr.unshift(next);
    this.setState({ activeinds: arr});  
 }


 goRight = () => {
   let cnt = this.state.filteredFeatures.length;
   if (cnt > this.state.activeinds[2]+1) {
     let arr = this.state.activeinds;
       arr.shift();
       arr.push(arr[1]+1);
     this.setState({ activeinds: arr});  
   }
 }
 


  render() {
 
    let items = this.state.filteredFeatures;
    console.log(items);
 
    if (items.length > 2) {
 
      let firstImage =items[this.state.activeinds[0]].images[0];
      let curitem = items[this.state.activeinds[1]]
      let activeImage = curitem.images[0];
      let lastImage = items[this.state.activeinds[2]].images[0];

    return (
    <section className="new-deals wave-bottom">
      <DealsHead categories={this.state.categories} updateActive={this.updateActive} activeCat={this.state.activeCat}/>
   
      <div className="new-deals__slider">
        <div className="new-deals__arrow new-deals__arrow_left arrow" onClick={this.goLeft}></div>
        
        <div className="new-deals__product new-deals__product_first"  style={{backgroundImage: `url(${firstImage})`}}>
          <a href="#"></a>
        </div>

        <div className="new-deals__product new-deals__product_active" style={{backgroundImage: `url(${activeImage})`}}>
          <a href="catalogue.html"></a>
          <div className="new-deals__product_favorite"></div>
        </div>
        
        <div className="new-deals__product new-deals__product_last" style={{backgroundImage: `url(${lastImage})`}}>
          <a href="#"></a>
        </div>
        
        <div className="new-deals__arrow new-deals__arrow_right arrow" onClick={this.goRight}></div>
      </div>
      
      <div className="new-deals__product-info">
        <a href="product-card-desktop.html" className="h3">{curitem.title}</a>
        <p>Производитель:
          <span>{curitem.brand}</span>
        </p>
        <h3 className="h3">{curitem.price}₽</h3>
      </div>
      
    </section>
    )} else { 
      return ( 
        <section className="new-deals wave-bottom">
          <DealsHead categories={this.state.categories} updateActive={this.updateActive} activeCat={this.state.activeCat}/> 
        </section>
       ) 
    };
  }
}
 
export default NewDeals;


