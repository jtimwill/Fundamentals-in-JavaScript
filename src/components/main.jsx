import React, { Component } from 'react';
import primitive_types from '../utilities/primitive_types.js';
import data_structures from '../utilities/data_structures.js';
import algorithms from '../utilities/algorithms.js';
import oop from '../utilities/oop.js';
import testing from '../utilities/testing.js';
import paradigms from '../utilities/paradigms.js';
import math_and_probabilty from '../utilities/math_and_probabilty.js';
import parallel_computing from '../utilities/parallel_computing.js';
import networking from '../utilities/networking.js';
import operating_systems from '../utilities/operating_systems.js';
import unix_command_line from '../utilities/unix_command_line.js';
import databases from '../utilities/databases.js';
import languages from '../utilities/languages.js';
import computer_hardware from '../utilities/computer_hardware.js';
import electronics from '../utilities/electronics.js';
import design_patters from '../utilities/design_patters.js';
import misc_cs from '../utilities/misc_cs.js';
import callbacks_js from '../utilities/callbacks_js.js';
import Accordion from './accordion';

class Main extends Component {
  state = {
    current_item: {},
    current_tab: 0
  };

  handleItemSelect = item => {
    if (item === this.state.current_item) {
      item = {};
    }
    this.setState({ current_item: item, current_tab: 0 });
  };

  handleTabSelect = tab => {
    this.setState({ current_tab: tab});
  };

  render() {
    const categories = [
      primitive_types,
      data_structures,
      algorithms,
      callbacks_js,
      oop,
      testing,
      paradigms,
      math_and_probabilty,
      parallel_computing,
      networking,
      operating_systems,
      unix_command_line,
      databases,
      languages,
      computer_hardware,
      electronics,
      design_patters,
      misc_cs
    ];
    return (
      <main className="bg-secondary custom-main">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        {categories.map(category => (
          <div className="accordion custom-accordion">
            <h3 className="text-light">{category.name}</h3>
            {category.data.map((item, index) => (
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
        ))}
      </main>
    );
  }
}

export default Main;
