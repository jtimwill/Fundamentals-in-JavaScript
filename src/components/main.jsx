import React, { Component } from 'react';
import algorithms from '../utilities/algorithms';
import Accordion from './accordion';

class Main extends Component {
  state = {
    algorithms: algorithms,
    current_item: {},
    current_tab: 1
  };

  handleItemSelect = item => {
    if (item === this.state.current_item) {
      item = {};
    }
    this.setState({ current_item: item, current_tab: 1 });
  };

  handleTabSelect = tab => {
    this.setState({ current_tab: tab});
  };

  render() {
    return (
      <main className="bg-secondary custom-main">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="flex-shrink-1">
          </div>
          <div className="custom-accordion">
            <h3 className="text-light">Algorithms</h3>
            {this.state.algorithms.map((item, index) => (
              <div
                key={item.id}
                className={"my-1 card " +
                (item === this.state.current_item ? "border-primary" : "")}
              >
              <Accordion
                item={item}
                current_item={this.state.current_item}
                index={index}
                onItemSelect={this.handleItemSelect}
                current_tab={this.state.current_tab}
                onTabSelect={this.handleTabSelect}
              />
              </div>
            ))}
          </div>
          <div className="flex-shrink-1">
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
