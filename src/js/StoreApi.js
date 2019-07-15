const api = "https://api-neto.herokuapp.com/bosa-noga";
const headers = {
    'Accept': 'application/json'
};


function getData(prm) {
     return (fetch(`${api}${prm}`, {headers}).then(response => response.json()));
    };


class StoreApi {
    /*Получение категорий */
    static getCategories () {
        return getData('/categories');
    }

    /*Получение Новинок */
    static getFeatured () {
      return getData('/featured');
    }  
 
}

export {StoreApi}