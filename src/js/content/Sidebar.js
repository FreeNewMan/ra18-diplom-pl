import React from 'react';
import {StoreApi} from '../tools/StoreApi.js';

const colorList = [
  {code: "beige", name: "Бежевый"},   
  {code: "whitesnake", name: "Белый"},  
  {code: "shocking-blue", name: "Голубой"},  
  {code: "yellow", name: "Жёлтый"},  
  {code: "king-crimson", name: "Алый"},  
  {code: "deep-purple", name: "Фиолетовый"},  
  {code: "black-sabbath", name: "Черный"}  
]

const sizesList = [31, 33, 35, 37, 39, 32, 34, 36, 38, 40]

function getColorCode (prm) {
  let colArr = colorList.filter( function (el) {return el.name === prm });
  let cur;
    if (colArr.length > 0) { cur =  colArr[0].code  }; 
  return cur;
}


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      filters: {}
    }

    this.changeType = this.changeType.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeReason = this.changeReason.bind(this);


    }


  componentDidMount () {
    StoreApi.getFilters().then((jsonData) => {
      if (jsonData.status === 'ok') { 
        this.setState({ filters: jsonData.data });
        console.log(jsonData.data);
      };
    });     
  }


  changeQuery (pk, pv) {
    let params = this.props.context.state.queryParams;
    params[pk] = pv
    this.props.context.setState({queryParams: params});
    this.props.context.getData();
  }


  changeType (e) {
    this.changeQuery('type', e.currentTarget.innerHTML);
  }

  changeColor (e) {
    //console.log(e.currentTarget.innerHTML);
    this.changeQuery('color', e.currentTarget.innerHTML);
  }


  changeReason (e) {
    //console.log(e.currentTarget.innerHTML);
    this.changeQuery('reason', e.currentTarget.innerHTML);
  }



  render() {
     let qParams = this.props.context.state.queryParams;
     console.log(this.state.filters);
     return (
      <div>
      {/*-- Сайдбар */}
      <section className="sidebar">
        <section className="sidebar__division">
          <div className="sidebar__catalogue-list">
            <div className="sidebar__division-title">
              <h3>Каталог</h3><div className="opener-down"></div>
            </div>
            <ul>
              {this.state.filters.type ? this.state.filters.type.map((item, idx) => <li key={idx}><a className={qParams.type === item ? 'chosen' : null } onClick={this.changeType}>{item}</a></li> ) : null} 
            </ul>
          </div>
        </section>
        <div className="separator-150 separator-150-1"></div>
        <section className="sidebar__division">
            <div className="sidebar__price">
              <div className="sidebar__division-title">
                <h3>Цена</h3><div className="opener-down"></div>
              </div>
              <div className="price-slider">
                <div className="circle-container">
                  <div className="circle-1"></div>
                  <div className="line-white"></div>
                  <div className="line-colored"></div>
                  <div className="circle-2"></div>
                </div>
                <div className="counter">
                  <input type="text" className="input-1" defaultValue={this.props.context.state.minPrice}/>
                  <div className="input-separator"></div>
                  <input type="text" className="input-2" defaultValue={this.props.context.state.maxPrice}/>
                </div>
              </div>
            </div>
        </section>
        <div className="separator-150 separator-150-2"></div>
        <section className="sidebar__division">
          <div className="sidebar__color">
            <div className="sidebar__division-title">
              <h3>Цвет</h3><div className="opener-down"></div>
            </div>
            <ul>
              {this.state.filters.color ? this.state.filters.color.map((item, idx) => <li key={idx}><a className={qParams.color === item ? 'chosen' : null } >
                <div className={`color 
               ${getColorCode(item)} `}></div><span className="color-name" onClick={this.changeColor}>{item}</span></a></li> ) : null} 
            </ul>
          </div>
        </section>
        <div className="separator-150 separator-150-3"></div>         
        
        <section className="sidebar__division">
          <div className="sidebar__size">
            <div className="sidebar__division-title">
              <h3>Размер</h3><div className="opener-down"></div>
            </div>
            <ul>
              <div className="list-1">
                <li><label><input type="checkbox" className="checkbox" name="checkbox-31"/><span className="checkbox-custom"></span> <span className="label">31</span></label></li>
                <li><label><input type="checkbox" className="checkbox" name="checkbox-33"/><span className="checkbox-custom"></span> <span className="label">33</span></label></li>
                <li><label><input type="checkbox" className="checkbox" name="checkbox-35"/><span className="checkbox-custom"></span> <span className="label">35</span></label></li>
                <li><label><input type="checkbox" className="checkbox" name="checkbox-37"/><span className="checkbox-custom"></span> <span className="label">37</span></label></li>
                <li><label><input type="checkbox" className="checkbox" name="checkbox-39"/><span className="checkbox-custom"></span> <span className="label">39</span></label></li>
              </div>
              <div className="list-2">
                <li><label><input type="checkbox" className="checkbox" name="checkbox-32"/><span className="checkbox-custom"></span> <span className="label">32</span></label></li>
                <li><label><input type="checkbox" className="checkbox" name="checkbox-34"/><span className="checkbox-custom"></span> <span className="label">34</span></label></li>
                <li><label><input type="checkbox" className="checkbox" name="checkbox-36" defaultChecked/><span className="checkbox-custom"></span> <span className="label">36</span></label></li>
                <li><label><input type="checkbox" className="checkbox" name="checkbox-38"/><span className="checkbox-custom"></span> <span className="label">38</span></label></li>
                <li><label><input type="checkbox" className="checkbox" name="checkbox-40"/><span className="checkbox-custom"></span> <span className="label">40</span></label></li> 
              </div>  
            </ul>
          </div>
        </section>
        
        <div className="separator-150 separator-150-4"></div>         
        
        <section className="sidebar__division">    
          <div className="sidebar__heel-height">
            <div className="sidebar__division-title">
              <h3>Размер каблука</h3><div className="opener-down"></div>
            </div>
              <ul>
                <div className="list-1">
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-31"/><span className="checkbox-custom"></span> <span className="label">1</span></label></li>
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-33"/><span className="checkbox-custom"></span> <span className="label">3</span></label></li>
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-35"/><span className="checkbox-custom"></span> <span className="label">5</span></label></li>
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-37"/><span className="checkbox-custom"></span> <span className="label">7</span></label></li>
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-39"/><span className="checkbox-custom"></span> <span className="label">9</span></label></li>
                </div>
                <div className="list-2">
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-32"/><span className="checkbox-custom"></span> <span className="label">2</span></label></li>
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-34"/><span className="checkbox-custom"></span> <span className="label">4</span></label></li>
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-36" defaultChecked/><span className="checkbox-custom"></span> <span className="label">6</span></label></li>
                 <li><label><input type="checkbox" className="checkbox" name="checkbox-38"/><span className="checkbox-custom"></span> <span className="label">8</span></label></li>
                  <li><label><input type="checkbox" className="checkbox" name="checkbox-40"/><span className="checkbox-custom"></span> <span className="label">10</span></label></li> 
                </div>  
              </ul>  
          </div>
        </section>
        <div className="separator-150 separator-150-5"></div>            
        <section className="sidebar__division">  
          <div className="sidebar__occasion">
            <div className="sidebar__division-title">
              <h3>Повод</h3><div className="opener-down"></div>
            </div>
            <ul>
              {this.state.filters.reason ? this.state.filters.reason.map((item, idx) => <li key={idx}><a className={qParams.reason === item ? 'chosen' : null } onClick={this.changeReason}>{item}</a></li> ) : null} 
            </ul>
          </div>
        </section>
        <div className="separator-150 separator-150-6"></div>       
        <section className="sidebar__division">
          <div className="sidebar__season">
            <div className="sidebar__division-title">
              <h3>Сезон</h3><div className="opener-up"></div>
            </div>
          </div>
        </section>
        <div className="separator-150 separator-150-7"></div>            
        <section className="sidebar__division">
            <div className="sidebar__brand">
              <h3>Бренд</h3>
              <form action="post" className="brand-search">
                <input type="search" className="brand-search" id="brand-search" placeholder="Поиск"/>
                <input type="submit" name="" defaultValue="" className="submit"/>
              </form>
            </div>

              <label><input type="checkbox" className="checkbox" name="checkbox-disc"/><span className="checkbox-discount"></span> <span className="text-discount">Со скидкой</span></label>

          <div className="separator-240"></div>
        </section>
            
        <section className="sidebar__division">    
          <div className="drop-down">
            <a href="#"><span className="drop-down-icon"></span>Сбросить</a>
          </div>
        </section>
      </section> 
      </div>
    );
  }
}

export default SideBar;