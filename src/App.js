const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    //creates a div tag, no attributes (ex. { id: "my-id" } ), children (could be an array)
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
