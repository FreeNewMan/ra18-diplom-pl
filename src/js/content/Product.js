import React from 'react';
import { Link } from 'react-router-dom';
import {StoreApi, FavApi} from '../tools/StoreApi.js';
import { withRouter } from 'react-router-dom';


function GoLink(id) {
  return <Link to={`/product/${id}`} />;
}


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this)
    this.state = {
      chngfav: false,
      visible: true
    }
  }

 favChoose = (item) => {
   FavApi.toogleChoose(item);
   this.setState({chngfav : !this.state.chngfav});
   if (this.props.favlist) {
//      console.log(this.props.favlist);
 //     console.log(this.props.favlist.state.favItems);
      this.props.favlist.setState({favItems: this.props.favlist.state.favItems.filter(function(ele){return ele !== item.id; })});
      this.props.favlist.setState({favItemsObjects: this.props.favlist.state.favItemsObjects.filter(function(ele){return ele.id !== item.id; })});
   }
 }


 handleOnClick = (id) => {
  this.props.history.push(`/product/${id}`);
 }

  render() {
     let chkLstorge = localStorage.getItem('favitems') || [] ;
     let inFav = ''; 
      if (chkLstorge.includes(this.props.item.id)) { 
        if ( this.props.fromCat ) {
          inFav = '-chosen'
        }
      };


    return (
    <a className="item-list__item-card item" >
     <div className="item-pic"><img className="item-pic-1" src={this.props.item.images[0]}  alt="" onClick={() => this.handleOnClick(this.props.item.id)}/>
       <div className={`product-catalogue__product_favorite${inFav}`} onClick={() => this.favChoose(this.props.item)}>
          <p></p>
        </div>
       <div className="arrow arrow_left"></div>
       <div className="arrow arrow_right"></div>
     </div>
     
     <div className="item-desc">
       <div>
         <h4 className="item-name">{this.props.item.title}</h4>
         <p className="item-producer">Производитель: <span className="producer">{this.props.item.title}</span></p>
         <p className="item-price">{this.props.item.price}</p>
       </div>  
       <div className="sizes">
         <p className="sizes__title">Размеры в наличии:</p>
         <p className="sizes__avalible">
           { this.props.item.sizes ? this.props.item.sizes.join(', ') : null } 
         </p>
       </div>
     </div>
   </a>
  );
 }
}    

export default withRouter(Product);

// to={`/product/${this.props.item.id}`}