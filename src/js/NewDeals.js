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


const favChoosenImg = '../img/new-deals__product_favorite_chosen.png';
const favImg = '../img/new-deals__product_favorite.png';


class NewDeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCat: '',
      featured: [],
      filteredFeatures: [],
      categories: [],
      activeinds: [0,1,2],
      chngfav: false
    }
  }



  componentDidMount () {
   let activeCat;

    StoreApi.getCategories().then((jsonData) => {
      if (jsonData.status === 'ok') { 
        activeCat = jsonData.data[1].id;
        this.setState({ categories: jsonData.data, activeCat: activeCat });
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
   this.setState({ activeCat: value, 
                   filteredFeatures: this.state.featured.filter(obj => obj.categoryId === value),
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
   let arr = this.state.activeinds;
   let next = arr[2]+1;
   if (arr[2] === this.state.filteredFeatures.length-1) { next = 0 };
   arr.shift();
   arr.push(next);
   this.setState({ activeinds: arr}); 
 }
 
 favChoose = (item) => {
   var localValue = localStorage.getItem(item.id);
   if (localValue) {
     localStorage.removeItem(item.id);
   } else {
     localStorage.setItem(item.id, item.title); 
   }
   this.setState({chngfav : !this.state.chngfav});
 }


  render() {
     let items = this.state.filteredFeatures;
 
    if (items.length > 2) {
 
      let firstImage =items[this.state.activeinds[0]].images[0];
      let previtem = items[this.state.activeinds[0]]
      let curitem = items[this.state.activeinds[1]]
      let lastitem = items[this.state.activeinds[2]]
      let activeImage = curitem.images[0];
      let lastImage = items[this.state.activeinds[2]].images[0];

      let curFavimg = favImg;
      let chkLstorge = localStorage.getItem(curitem.id);
      if (chkLstorge) { 
        curFavimg = favChoosenImg 
      };

    return (
    <section className="new-deals wave-bottom">
      <DealsHead categories={this.state.categories} updateActive={this.updateActive} activeCat={this.state.activeCat}/>
   
      <div className="new-deals__slider">
        <div className="new-deals__arrow new-deals__arrow_left arrow" onClick={this.goLeft}></div>
        
        <div className="new-deals__product new-deals__product_first"  style={{backgroundImage: `url(${firstImage})`}}>
         <Link to={`/product/${previtem.id}`}></Link>        
        </div>

        <div className="new-deals__product new-deals__product_active" style={{backgroundImage: `url(${activeImage})`}}>
          <Link to={`/product/${curitem.id}`}></Link>        
          <div className="new-deals__product_favorite" style={{backgroundImage: `url(${curFavimg})`}} onClick={() => this.favChoose(curitem)}></div>
        </div>
        
        <div className="new-deals__product new-deals__product_last" style={{backgroundImage: `url(${lastImage})`}}>
          <Link to={`/product/${lastitem.id}`}></Link>        
       </div>
        
        <div className="new-deals__arrow new-deals__arrow_right arrow" onClick={this.goRight}></div>
      </div>
      
      <div className="new-deals__product-info">
        <Link to={`/product/${curitem.id}`} className='h3'>{curitem.title}</Link>        
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


