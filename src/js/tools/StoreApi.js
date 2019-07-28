const api = "https://api-neto.herokuapp.com/bosa-noga";
const headers = {
    'Accept': 'application/json'
};


function getData(prm) {
    console.log(prm);
     return (fetch(`${api}${prm}`, {headers}).then(response => response.json()));
    };


class StoreApi {

    /*доступные фильтры*/
    static getFilters () {
      return getData('/filters');
    }  

    /*Получение категорий */
    static getCategories () {
        return getData('/categories');
    }

    /*Получение Новинок */
    static getFeatured () {
      return getData('/featured');
    }  

    static getProduct (id) {
      return getData(`/products/${id}`);
    }  
      /*Получение товаров */
    static getProducts (params) {
      let prm = [] ;
    
     for (let elm in params) {
        if (Array.isArray(params[elm])) {
          for (var i = 0; i < params[elm].length ; i++) {
            prm.push(elm+'[]='+ params[elm][i]);
           }      
        } else {
         prm.push(elm+'='+ params[elm]);
        }
       
      }

       return getData(`/products?${prm.join('&')}`);
    }  

}

class FavApi {
  static toogleChoose (item) {
   let favItems = JSON.parse(localStorage.getItem('favitems')) || [];
   if (favItems.includes(item.id)) {
      favItems = favItems.filter(function(ele){return ele !== item.id; });
   } else {
     favItems.push(item.id);
   }
     localStorage.setItem('favitems', JSON.stringify(favItems)); 
  } 

}



/*function postData(prm) {
     return (fetch(`${api}/cart/${prm}` , {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(prm),
       }).then(response => response.json())
     );
};
*/


class CartApi {
   
   static ToCart (item) {
     let cartId = localStorage.getItem('cartId') || '';
     return (fetch(`${api}/cart/${cartId}` , {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(item),
       }).then(response => response.json()));
   }

    static getCartItems () {
     let cartId = localStorage.getItem('cartId') || '';
     return getData(`/cart/${cartId}`);
    }  

}


export {StoreApi, FavApi, CartApi }