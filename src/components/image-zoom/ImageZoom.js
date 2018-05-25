import React, { Component } from "react";

export class ImageZoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleZoom = e => {
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });
  };

  render() {
    return (
      <figure>
        <img
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.handleZoom}
          className="image__cursor"
        />

        <figcaption>{this.props.caption}</figcaption>

        <div
          onClick={this.handleZoom}
          className={
            this.state.isActive
              ? "image__zoom image__zoom--is-active"
              : "image__zoom"
          }
        >
          <img
            src={`/images/${this.props.imageName}@2x.jpg`}
            // src={this.props.src}
            alt={this.props.alt}
          />
          <div className="zoom__image__close">
            <span>x</span>
          </div>
        </div>
      </figure>
    );
  }
}

export default ImageZoom;
