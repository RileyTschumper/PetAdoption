import React from "react";
import { ANIMALS } from "petfinder-client";

class Search extends React.Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: ""
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };

  render() {
    return (
      <div className="search-params">
        {/* Look up label...we have to use htmlFor because for in JS is keyword */}
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.state.animal}
              onChange={this.handleAnimalChange}
              onBlur={this.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          ;
        </label>
      </div>
    );
  }
}

export default Search;
