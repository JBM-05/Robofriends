import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundry";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  onsearchchange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterdrobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo friends</h1>
          <SearchBox searchchange={this.onsearchchange} />
          <Scroll>
            <ErrorBoundary>
            <CardList robots={filterdrobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
