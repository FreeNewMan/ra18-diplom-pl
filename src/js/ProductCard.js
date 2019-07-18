import React from 'react';
import {StoreApi} from './StoreApi.js';


const FavProdSlider = () => (
  <div>
  {/*<!-- Слайдер выбранного товара -->*/}
   <section className="main-screen__favourite-product-slider">
     <div className="favourite-product-slider">
      <div className="favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up"></div>
      <div className="favourite-product-slider__item favourite-product-slider__item-1">
        <a href="#"></a>
      </div>
      <div className="favourite-product-slider__item favourite-product-slider__item-2">
        <a href="#"></a>
      </div>
      <div className="favourite-product-slider__item favourite-product-slider__item-3">
        <a href="#"></a>
      </div>
      <div className="favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down"></div>
      </div>
   </section>
   </div>
  );


class ProductCard extends React.Component {
   constructor(props) {
     super(props);
       this.state = {
        product: ''
     }
   }

  componentDidMount () {
    const  productId = this.props.location.pathname.match(/^\/product\/(\d+)\/?$/i)[1];
    //console.log(productId);
    StoreApi.getProduct(productId).then((jsonData) => {
      if (jsonData.status === 'ok') { 
        this.setState({ product: jsonData.data });
        console.log(this.state.product);
      };
    });     

  }



  render() {
    let curItem = this.state.product;
    return (
    <div>
    <div className="site-path">
      <ul className="site-path__items">
        <li className="site-path__item"><a href="index.html">Главная</a></li>
        <li className="site-path__item"><a href="#">Женская обувь</a></li>
        <li className="site-path__item"><a href="#">Ботинки</a></li>
        <li className="site-path__item"><a href="#">Ботинки женские</a></li>
      </ul>
    </div>
     {/*--- Тело карточки товара -- */}
    <main className="product-card">
		  <section className="product-card-content">
				<h2 className="section-name">{curItem.title}</h2>
				<section className="product-card-content__main-screen">
          <FavProdSlider />
						{/*-- Изображение выбранного товара -->*/}
						<div className="main-screen__favourite-product-pic">
						<a href="#"><img src={curItem.images} alt=""/></a>
						<a href="#" className="main-screen__favourite-product-pic__zoom"></a>
					</div>
					{/*<!-- Блок информации о товаре -->*/}
					<div className="main-screen__product-info">
						<div className="product-info-title"><h2>{curItem.title}</h2><div className="in-stock">В наличии</div></div>
						<div className="product-features">
						  <table className="features-table">
						    <tbody>
                <tr>
						      <td className="left-col">Артикул:</td>
						      <td className="right-col">BD0677C</td>
						    </tr>
						      <tr>
						        <td className="left-col">Производитель:</td>
						        <td className="right-col"><a href="#"><span className="producer">{curItem.brand}</span></a></td>
						    </tr>
						      <tr>
						        <td className="left-col">Цвет:</td>
						        <td className="right-col">{curItem.color}</td>
						    </tr>
						      <tr>
						        <td className="left-col">Материалы:</td>
						        <td className="right-col">{curItem.material}</td>
						    </tr>
						      <tr>
						        <td className="left-col">Сезон:</td>
						        <td className="right-col">{curItem.season}</td>
						    </tr>
						      <tr>
						        <td className="left-col">Повод:</td>
						        <td className="right-col">{curItem.reason}</td>
						    </tr>
                </tbody>
						  </table>
						</div>
								<p className="size">Размер</p>
								<ul className="sizes">
                    { curItem.sizes ? curItem.sizes.map((item) => <li className={ item.available ? 'active' : null }><a href="#" >{item.size}</a></li>) : null } 
								</ul>
						<div className="size-wrapper">
								<a href="#"><span className="size-rule"></span><p className="size-table">Таблица размеров</p></a>
							</div>
							<a href="#" className="in-favourites-wrapper">
								<div className="favourite" href="#"></div><p className="in-favourites">В избранное</p>
							</a>
						<div className="basket-item__quantity">
						  <div className="basket-item__quantity-change basket-item-list__quantity-change_minus">-</div>1
						  <div className="basket-item__quantity-change basket-item-list__quantity-change_plus">+</div>
						</div>
						<div className="price">{curItem.price} ₽</div>
						<button className="in-basket in-basket-click">В корзину</button>
					</div>

				</section>
		</section>
    </main>
    {/*<!-- Слайдеры внизу карточки  -->*/}
    {/*<!-- Слайдер "Вы смотрели" -->     */}
    <section className="product-card__overlooked-slider">
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
				{/*<!-- Слайдер "Похожие товары" -->*/}
    <section className="product-card__similar-products-slider">
      <h3>Похожие товары:</h3>
      <div className="similar-products-slider">
        <div className="similar-products-slider__arrow similar-products-slider__arrow_left arrow"></div>
        	<div className="similar-products-slider__item-list__item-card item">
            <div className="similar-products-slider__item">
              <a href="product-card-desktop.html"><img src="img/product-card-pics/product-card__similar-products-slider-item-1.png" className="similar-products-slider__item-pic-1" alt="Ботинки женские"/>
              </a>
            </div>
            <div className="similar-products-slider__item-desc">
              <h4 className="similar-products-slider__item-name">Ботинки женские</h4>
              <p className="similar-products-slider__item-producer">Производитель: <span className="producer">Norma J.Baker</span></p>
              <p className="similar-products-slider__item-price">23 150</p>
            </div>    
          </div>
        	<div className="similar-products-slider__item-list__item-card item">
            <div className="similar-products-slider__item">
              <a href="product-card-desktop.html"><img src="img/product-card-pics/product-card__similar-products-slider-item-2.png" className="similar-products-slider__item-pic-2" alt="Полуботинки женские"/></a>
            </div>
            <div className="similar-products-slider__item-desc">
              <h4 className="similar-products-slider__item-name">Полуботинки женские</h4>
              <p className="similar-products-slider__item-producer">Производитель: <span className="producer">Shoes Market</span></p>
              <p className="similar-products-slider__item-price">4 670</p>
            </div>    
          </div>
        	<div className="similar-products-slider__item-list__item-card item">
            <div className="similar-products-slider__item">
              <a href="product-card-desktop.html"><img src="img/product-card-pics/product-card__similar-products-slider-item-3.png" className="similar-products-slider__item-pic-3" alt="Ботинки женские"/></a>
            </div>
            <div className="similar-products-slider__item-desc">
              <h4 className="similar-products-slider__item-name">Ботинки женские</h4>
              <p className="similar-products-slider__item-producer">Производитель: <span className="producer">Menghi Shoes</span></p>
              <p className="similar-products-slider__item-price">6 370</p>
            </div>
          </div>
        <div className="similar-products-slider__arrow similar-products-slider__arrow_right arrow"></div>
      </div>
    </section>
    </div>    
    );
  }
}
 
export default ProductCard;