import React, { Component } from 'react';

import SliderHome from './SliderHome.js';
import NewDeals from './NewDeals.js';
import SalesAndNews from './SalesAndNews.js';
import AboutUs from './AboutUs.js';


import '../../css/normalize.css';
import '../../css/font-awesome.min.css';
import '../../css/style.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    this.setState({ categories: this.props.context.state.categories });
  }

 
  render() {
    return (
        <div>
          <SliderHome />
          { this.state.categories.length > 0 ? <NewDeals context={this} /> : ''}
          <SalesAndNews />
          <AboutUs />
        </div>  
    );
  }
}


export default HomePage;
