import React from 'react';




window.requestAnimationFrame = (function () { // для поддержки requestAnimationFrame всеми браузерами
    return window.requestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();


class SliderHome extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
 
    }
  }

  componentDidMount() {
    this.slider(this.divSlider, [this.img0, this.img1, this.img2, this.img3],  [this.btn0, this.btn1, this.btn2, this.btn3],  '4000', '1000', [this.arr0, this.arr1] );
   }


  slider(f, img, button, V, Vo, arrows) {
    var iii = 0,
        start = null,
        clear = 0;

    function step(time) {
        if (start === null) start = time;
        var progress = time - start;
        if (progress > V) {
            start = null;
            for (var i = 0; i < img.length; i++) {
                img[i].style.zIndex = "0"; 
                button[i].style.opacity = "0.5";
            }
            img[iii].style.zIndex = "1";
            iii = ((iii != (img.length - 1)) ? (iii + 1) : 0);
            img[iii].style.zIndex = "2";
            img[iii].style.opacity = "0";
            button[iii].style.opacity = "1";
        } else if (img[iii].style.opacity != "") {
            img[iii].style.opacity = ((progress / Vo < 1) ? (progress / Vo) : 1);
        }
        if (clear != "0" && progress > Vo) {} else {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
    f.onmouseenter = function () {
        if (clear == "0") clear = "1";
    } // при наведении на слайдер
    f.onmouseleave = function () {
        if (clear == "1") {
            clear = "0";
            requestAnimationFrame(step);
        }
    } // курсор убран со слайдера
    for (var j = 0; j < button.length; j++) { // при нажатии кнопок
        button[j].onclick = function () {
            for (var i = 0; i < img.length; i++) {
                img[i].style.zIndex = "0";
                button[i].style.opacity = "0.5";
            }
            iii = +this.value;
            img[this.value].style.zIndex = "2";
            button[this.value].style.opacity = "1";
        }
        arrows[0].onclick = function () {
            img[iii].style.zIndex = "0";
            button[iii].style.opacity = "0.5";
            iii--;
            iii = ((iii < 0) ? img.length - 1 : iii);
            img[iii].style.zIndex = "2";
            button[iii].style.opacity = "1";
        }
        arrows[1].onclick = function () {
            img[iii].style.zIndex = "0";
            button[iii].style.opacity = "0.5";
            iii++;
            iii = ((iii === img.length) ? 0 : iii);
            img[iii].style.zIndex = "2";
            button[iii].style.opacity = "1";
        }
    }
}


  render() {
    return (
      <section className="slider">
        <div className="wrapper">
          <div className="slider__pictures"  ref={div => this.divSlider = div}>
            
            <a className="slider__image" href="/" ref={a => this.img0 = a}>
              <img src="img/slider.jpg" alt="slide picture"/>
            </a>
            
            <a className="slider__image" href="/" ref={a => this.img1 = a}>
              <img src="img/slider180deg.jpeg" alt="slide picture"/>
            </a>
            
            <a className="slider__image" href="/" ref={a => this.img2 = a}>
              <img src="img/slider.jpg" alt="slide picture"/>
            </a>
            
            <a className="slider__image" href="/" ref={a => this.img3 = a}>
              <img src="img/slider180deg.jpeg" alt="slide picture"/>
            </a>
            
            <div className="arrow slider__arrow slider__arrow_left" ref={a => this.arr0 = a}></div>
            <div className="arrow slider__arrow slider__arrow_right" ref={a => this.arr1 = a}></div>
            <div className="slider__circles">
              <button className="slider__circle" value="0" ref={a => this.btn0 = a}></button>
              <button className="slider__circle" value="1" ref={a => this.btn1 = a}></button>
              <button className="slider__circle" value="2" ref={a => this.btn2 = a}></button>
              <button className="slider__circle" value="3" ref={a => this.btn3 = a}></button>
            </div>
            <h2 className="h2">К весне готовы!</h2>
          </div>
        </div>
      </section>
    );
  }
}
 
export default SliderHome;

