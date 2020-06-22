import React from 'react';
import './labs.css';
import './masonry.css';

class ImageList extends React.Component {
  renderImage() {
    const images = this.props.imageList.map(image => {
      return (
        <div className="brick">
          <img
            alt={image.description}
            key={image.id}
            src={image.urls.regular}
          />
        </div>
      );
    });

    return images;
  }

  render() {
    return (
      <div>
        <h3>Found : {this.props.imageList.length} images</h3>
        <div className="container">
          <div className="wrapper">
            {/* <div className="masonry bordered">{this.renderImage()}</div> */}
            {/* <div className="masonry gutterless">{this.renderImage()}</div> */}
            <div className="masonry">{this.renderImage()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageList;
