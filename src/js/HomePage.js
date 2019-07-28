import React, { Component } from 'react';

import SliderHome from './SliderHome.js';
import NewDeals from './NewDeals.js';
import SalesAndNews from './SalesAndNews.js';
import AboutUs from './AboutUs.js';

import './src/css/normalize.css';
import './src/css/font-awesome.min.css';
import './src/css/style.css';


class HomePage extends Component {
  render() {
    return (
        <div>
          <SliderHome />
          <NewDeals />
          <SalesAndNews />
          <AboutUs />
        </div>  
    );
  }
}


export default HomePage;
