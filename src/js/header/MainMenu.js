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
   let categoryId;
   if (props.category.length > 0) {
     categoryId = props.category[0].id;
   }
   return (
      <li className={`main-menu__item main-menu__item_${props.item.code} ${props.active}`} onClick={() => {props.updateActive(props.item.code, categoryId)} } >
         <Link to="">{props.item.name}</Link>
      </li>
    );
}


class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      active: this.props.active, 
      categoryId: '',
      activeDropped: false
    }
  }

 updateActive = (value, categoryId) => {
   this.setState({ active: value, activeDropped: true, categoryId: categoryId })
 }

 hideActiveDropped = () => {
   this.setState({ activeDropped: false})
 }

  render() {
    return (
      <div>
      <nav className="main-menu">
        <div className="wrapper">
          <ul className="main-menu__items">
            {menuItems.map((item) => <MenuItem key={item.code} item={item} category={this.props.context.state.categories.filter(function(ele){return ele.title === item.name; })}  updateActive={this.updateActive} active={item.code === this.state.active ? 'main-menu__item_active' : '' }/>)}
          </ul>
        </div>
      </nav>
      <DroppedMenu active={this.state.activeDropped ? 'dropped-menu_visible' : '' } categoryId={this.state.categoryId} hideActiveDropped={this.hideActiveDropped} />
      </div>
    );
  }
}
 

function SubItem(props) {
   return (
      <li className='dropped-menu__item' onClick={() => props.hideActiveDropped()}>
         <Link to= {{  
             pathname: '/catalogue',
             params: props.params
         }}
           >{props.item.title}</Link>
      </li>
    );
}


class DroppedMenu extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      occasionList : [
        {id: '1' , url: '/', title: 'Офис' },
        {id: '2' , url: '/', title: 'Вечеринка' },
        {id: '3' , url: '/', title: 'Свадьба' },
        {id: '4' , url: '/', title: 'Спорт' },
        {id: '5' , url: '/', title: 'Море' },
        {id: '6' , url: '/', title: 'Дом' },
        {id: '7' , url: '/', title: 'Повседневное' }
      ],

      subCatList : [
        {id: '1' , url: '/', title: 'Балетки' },
        {id: '2' , url: '/', title: 'Босоножки' },
        {id: '3' , url: '/', title: 'Ботильоны' },
        {id: '4' , url: '/', title: 'Ботинки' },
        {id: '5' , url: '/', title: 'Ботфорты' },
        {id: '6' , url: '/', title: 'Галоши' },
        {id: '7' , url: '/', title: 'Кеды и кроссовки' },
        {id: '8' , url: '/', title: 'Мокасины' },
        {id: '9' , url: '/', title: 'Полусапоги' },
        {id: '10' , url: '/', title: 'Резиновые сапоги' },
        {id: '11' , url: '/', title: 'Сабо' },
        {id: '12' , url: '/', title: 'Сапоги' },
        {id: '13' , url: '/', title: 'Сникерсы' },
        {id: '14' , url: '/', title: 'Тапочки' },
        {id: '15' , url: '/', title: 'Туфли' },
        {id: '16' , url: '/', title: 'Шлёпанцы и вьетнамки' }
      ],

      seasontList : [
        {id: '1' , url: '/', title: 'Зима' },
        {id: '2' , url: '/', title: 'Весна' },
        {id: '3' , url: '/', title: 'Лето' },
        {id: '4' , url: '/', title: 'Осень' }
      ],

      brandList : [
        {id: '1' , url: '/', title: 'Albano' },
        {id: '2' , url: '/', title: 'Ballin' },
        {id: '3' , url: '/', title: 'Baldinini' },
        {id: '4' , url: '/', title: 'Damlax' },
        {id: '5' , url: '/', title: 'Pegia' },
        {id: '6' , url: '/', title: 'Renzi' },
        {id: '7' , url: '/', title: 'Все' },
      ]      

    }
  }
  
  render() {
    let params = {};
    if (this.props.categoryId) { params.categoryId=this.props.categoryId };
    return (
      <div className={`dropped-menu ${this.props.active}`}>
        <div className="wrapper">
          <div className="dropped-menu__lists dropped-menu__lists_women">
            <h3 className="dropped-menu__list-title">Повод:</h3>
            <ul className="dropped-menu__list">
              {this.state.occasionList.map( (item) => <SubItem key={item.id} item={item} params={{reason: item.title , ...params}} hideActiveDropped={this.props.hideActiveDropped} /> )}
            </ul>
          </div>
          <div className="dropped-menu__lists dropped-menu__lists_three-coloumns">
            <h3 className="dropped-menu__list-title">Категории:</h3>
            <ul className="dropped-menu__list">
              {this.state.subCatList.map( (item) => <SubItem key={item.id} item={item}  params={{type : item.title , ...params}} hideActiveDropped={this.props.hideActiveDropped} /> )}
            </ul>
          </div>
          <div className="dropped-menu__lists">
            <h3 className="dropped-menu__list-title">Сезон:</h3>
            <ul className="dropped-menu__list">
              {this.state.seasontList.map( (item) => <SubItem key={item.id} item={item} params={{season  : item.title , ...params}} hideActiveDropped={this.props.hideActiveDropped} /> )}
            </ul>
          </div>
          <div className="dropped-menu__lists">
            <h3 className="dropped-menu__list-title">Бренды:</h3>
            <ul className="dropped-menu__list">
              {this.state.brandList.map( (item) => <SubItem key={item.id} item={item} params={{brand   : item.title , ...params}} hideActiveDropped={this.props.hideActiveDropped} /> )}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
 

export default MainMenu ;


