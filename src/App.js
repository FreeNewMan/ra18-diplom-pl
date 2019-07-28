import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopMenu from './js/header/TopMenu.js';
import Header from './js/header/Header.js';
import HiddenPanel from './js/header/HiddenPanel.js';
import Phone from './js/header/Phone.js';
import Logo from './js/header/Logo.js';
import Profile from './js/header/Profile.js';
import MainMenu  from './js/header/MainMenu.js';
import Footer from './js/footer/Footer.js';
import Catalogue from './js/content/Catalogue.js';
import Favorite from './js/content/Favorite.js';
import {StoreApi, FavApi} from './js/tools/StoreApi.js';

import HomePage from './js/content/HomePage.js';
import ProductCard from './js/content/ProductCard.js';
import Order from './js/content/Order.js';
import OrderDone from './js/content/OrderDone.js';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePanel: false,
      visibleProfile: false,
      visibleBasket: false, 
      categories: []
    }
  }


  componentDidMount () {
    StoreApi.getCategories().then((jsonData) => {
      if (jsonData.status === 'ok') { 
        this.setState({ categories: jsonData.data });
      };
    });    
  }

  updateVisibleProfile = () => {
    this.setState({  visiblePanel: this.state.visibleProfile ? false : true, visibleProfile: !this.state.visibleProfile,  visibleBasket: false })
  }

  updateVisibleBasket = () => {
    this.setState({ visiblePanel: this.state.visibleBasket ? false : true , visibleBasket: !this.state.visibleBasket,  visibleProfile: false })
  }

  hidePanel = () => {
   this.setState( {visiblePanel: false});
  } 


  render() {
    return (
      <Router>
          <Header>
            <TopMenu />
            <div className="header-main">
              <div className="header-main__wrapper wrapper">
                <Phone />
                <Logo hidePanel={this.hidePanel}/>
                <Profile 
                  updateVisibleBasket={this.updateVisibleBasket} 
                  visibleBasket={this.state.visibleBasket}
                  updateVisibleProfile={this.updateVisibleProfile} 
                  visibleProfile={this.state.visibleProfile}
                  />
              </div>  
            <HiddenPanel 
              visiblePanel={this.state.visiblePanel ? 'header-main__hidden-panel_visible' : ''} 
              visibleProfile={this.state.visibleProfile ? 'hidden-panel__profile_visible' : ''} 
              visibleBasket={this.state.visibleBasket ? 'hidden-panel__basket_visible' : ''} 
              updateVisibleProfile={this.updateVisibleProfile}
              updateVisibleBasket={this.updateVisibleBasket}
              />
            </div>  
             {this.state.categories.length > 0 ? <MainMenu context={this} /> : ''}
          </Header>  
          <Switch>
            <Route exact path="/" render={(props) => (
                this.state.categories.length > 0 ? <HomePage context={this} /> : ''
              )}/>
            <Route path="/catalogue" component={Catalogue}/>
            <Route path="/favorite" component={Favorite}/>
            <Route path="/product" component={ProductCard}/>
            <Route path="/product/:id?" component={ProductCard}/>
            <Route path="/order" component={Order}/>
            <Route path="/orderdone" component={OrderDone}/>
          </Switch>
          <Footer />
      </Router>
    );
  }
}


export default App;




