import React, { Component } from 'react';


class SliderHome extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
 
    }
  }
  render() {
    return (
      <section className="slider">
        <div className="wrapper">
          <div className="slider__pictures">
            
            <a className="slider__image" href="#">
              <img src="img/slider.jpg" alt="slide picture"/>
            </a>
            
            <a className="slider__image" href="#">
              <img src="img/slider180deg.jpeg" alt="slide picture"/>
            </a>
            
            <a className="slider__image" href="#">
              <img src="img/slider.jpg" alt="slide picture"/>
            </a>
            
            <a className="slider__image" href="#">
              <img src="img/slider180deg.jpeg" alt="slide picture"/>
            </a>
            
            <div className="arrow slider__arrow slider__arrow_left"></div>
            <div className="arrow slider__arrow slider__arrow_right"></div>
            <div className="slider__circles">
              <button className="slider__circle" value="0"></button>
              <button className="slider__circle" value="1"></button>
              <button className="slider__circle" value="2"></button>
              <button className="slider__circle" value="3"></button>
            </div>
            <h2 className="h2">К весне готовы!</h2>
          </div>
        </div>
      </section>
    );
  }
}
 
export default SliderHome;

