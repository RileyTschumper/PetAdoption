import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.js";

class App extends React.Component {
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
        <h1> Adopt Me! </h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mix" />
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
