require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
var imageDatas=require('../data/imageDatas.json')
let yeomanImage = require('../images/yeoman.png');
//利用自执行函数。
imageDatas=(function getImageURL(imageDatasArr) {
  for (let index = 0,j=imageDatasArr,length; index < j; index++) {
    const singleImageData = imageDatasArr[index];
    singleImageData.imageURl = require('../images/yeoman.png');
    imageDatasArr[index]=singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="stage">
        <div className="img-sec"></div>
        <nav className="controller-nav"></nav>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
