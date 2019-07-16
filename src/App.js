import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopMenu from './js/TopMenu.js';
import Header from './js/Header.js';
import HiddenPanel from './js/HiddenPanel.js';
import Phone from './js/Phone.js';
import Logo from './js/Logo.js';
import Profile from './js/Profile.js';
import MainMenu from './js/MainMenu.js';
import Footer from './js/Footer.js';
import Catalogue from './js/Catalogue.js';
import Favorite from './js/Favorite.js';

import HomePage from './js/HomePage.js';
import ProductCard from './js/ProductCard.js';
import Order from './js/Order.js';
import OrderDone from './js/OrderDone.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePanel: false,
      visibleProfile: false,
      visibleBasket: false

    }
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
        <div className="container">
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
            <MainMenu />
          </Header>  
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/catalogue" component={Catalogue}/>
            <Route path="/favorite" component={Favorite}/>
            <Route path="/product" component={ProductCard}/>
            <Route path="/order" component={Order}/>
            <Route path="/orderdone" component={OrderDone}/>
          </Switch>
          <Footer />
        </div>  
      </Router>
    );
  }
}


export default App;




