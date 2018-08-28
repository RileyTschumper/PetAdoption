import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps(props) {
    //pulls media from props
    const media = props.media;
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      //filters out all of the photos that are not "pn"
      //"pn" if from the API...a certain size of the photo
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    //returns a new object of photos after filtered
    return { photos };
  }

  //has to be an arrow function because of scoping when refering to "this"
  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        //pulls photo[0].value (.value gives the address to photo)
        <img src={photos[active].value} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo.value}
              src={photo.value}
              //A condenseded if statement
              //if it is true, "active"
              //if not, ""
              className={index === active ? "active" : ""}
              alt="animal thumnbail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
