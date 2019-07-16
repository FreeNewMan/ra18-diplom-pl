import React from 'react';
import { Link } from 'react-router-dom';


const menuItems = [
  {code: "sales", name: "Акции"},   
  {code: "women", name: "Женская обувь"},  
  {code: "men", name: "Мужская обувь"},  
  {code: "kids", name: "Детская обувь"},  
  {code: "accessories", name: "Аксессуары"},  
  {code: "home", name: "Для дома"},  
  {code: "brands", name: "Бренды"},  
  {code: "new", name: "Новинки"}  
]


function MenuItem(props) {
   return (
      <li className={`main-menu__item main-menu__item_${props.item.code} ${props.active}`} onClick={() => {props.updateActive(props.item.code)} } >
         <Link to="/catalogue">{props.item.name}</Link>
      </li>
    );
}


class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active 
    }
  }

 updateActive = (value) => {
   this.setState({ active: value })
 }

  render() {
    return (
      <nav className="main-menu">
        <div className="wrapper">
          <ul className="main-menu__items">
            {menuItems.map((item) => <MenuItem key={item.code} item={item} updateActive={this.updateActive} active={item.code === this.state.active ? 'main-menu__item_active' : '' }/>)}
          </ul>
        </div>
      </nav>
    );
  }
}
 

class DroppedMenu extends React.Component {
  render() {
    return (
      <div className="dropped-menu">
        <div className="wrapper">
          <div className="dropped-menu__lists dropped-menu__lists_women">
            <h3 className="dropped-menu__list-title">Повод:</h3>
            <ul className="dropped-menu__list">
              <li className="dropped-menu__item">
                <a href="#">Офис</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Вечеринка</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Свадьба</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Спорт</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Море</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Дом</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Повседневное</a>
              </li>
            </ul>
          </div>
          <div className="dropped-menu__lists dropped-menu__lists_three-coloumns">
            <h3 className="dropped-menu__list-title">Категории:</h3>
            <ul className="dropped-menu__list">
              <li className="dropped-menu__item">
                <a href="#">Балетки</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Босоножки</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Ботильоны</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Ботинки</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Ботфорты</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Галоши</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Кеды и кроссовки</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Мокасины</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Полусапоги</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Резиновые сапоги</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Сабо</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Сапоги</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Сникерсы</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Тапочки</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Туфли</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Шлёпанцы и вьетнамки</a>
              </li>
            </ul>
          </div>
          <div className="dropped-menu__lists">
            <h3 className="dropped-menu__list-title">Сезон:</h3>
            <ul className="dropped-menu__list">
              <li className="dropped-menu__item">
                <a href="#">Зима</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Весна</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Лето</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Осень</a>
              </li>
            </ul>
          </div>
          <div className="dropped-menu__lists">
            <h3 className="dropped-menu__list-title">Бренды:</h3>
            <ul className="dropped-menu__list">
              <li className="dropped-menu__item">
                <a href="#">Albano</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Ballin</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Baldinini</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Damlax</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Pegia</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Renzi</a>
              </li>
              <li className="dropped-menu__item">
                <a href="#">Все</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
 

export default MainMenu;

