import React, { Component } from 'react';

import SliderHome from './SliderHome.js';
import NewDeals from './NewDeals.js';
import SalesAndNews from './SalesAndNews.js';
import AboutUs from './AboutUs.js';



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
