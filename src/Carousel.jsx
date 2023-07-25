import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static detaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        {console.log(this.state)}
        {console.log(active)}
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              data-active={active}
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
