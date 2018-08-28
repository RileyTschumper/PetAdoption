import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.js";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    //an array of pet data we load from API, inititalize it here to prevent it not existing
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ location: "Seattle, WA", output: "full" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
      });
  }
  render() {
    //creates a div tag, no attributes (ex. { id: "my-id" } ), children (could be an array)
    /*
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Betty",
        animal: "cat",
        breed: "Brazilian Shorthair"
      })
    ]);
    */

    //JSX verision of above code
    return (
      <div>
        <h1>Adopt Me!</h1>
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

/*
//same as: const App = function() {}
//think of App as a class
const App = () => {
  //creates a div tag, no attributes (ex. { id: "my-id" } ), children (could be an array)
  return React.createElement("div", {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'dog',
      breed: 'Havanese'
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'bird',
      breed: 'Cockatiel'
    }),
    React.createElement(Pet, {
      name: 'Betty',
      animal: 'cat',
      breed: 'Brazilian Shorthair'
    })
  ])
}
*/

//rendering App to 'root'
//createElement essentially creates a new instance of App
ReactDOM.render(React.createElement(App), document.getElementById("root"));
