import React from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ item, current_item, index, onItemSelect, current_tab, onTabSelect }) => {
  function getAccordionCSSClass(item, current_item) {
    return item === current_item ? "custom-show" : "custom-hide-2"
  }
  return (
    <div>
      <div className="card-header custom-hover" onClick={() => onItemSelect(item)}>
        <span className="font-weight-bold">{item.name}</span>
      </div>
      <div className={getAccordionCSSClass(item, current_item)}>
        <div className="card-body">
          <ul className="nav nav-tabs">
            <li className="nav-item" onClick={() => onTabSelect(1)}>
              <a className={current_tab === 1 ? "nav-link active" : "nav-link"}>
                Psuedocode
              </a>
            </li>
            <li className="nav-item" onClick={() => onTabSelect(2)}>
              <a className={current_tab === 2 ? "nav-link active" : "nav-link"}>
                JavaScript
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className={current_tab === 1 ? "tab-pane show active" : "tab-pane"}>
              <pre className="line-numbers mb-3" data-src="prism-line-numbers.js">
                <code className="language-js">{item.pseudocode}</code>
              </pre>
            </div>
            <div className={current_tab === 2 ? "tab-pane show active" : "tab-pane"}>
              <pre className="line-numbers mb-3" data-src="prism-line-numbers.js">
                <code className="language-js">{item.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  item: PropTypes.object.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  current_item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  current_tab: PropTypes.number.isRequired,
  onTabSelect: PropTypes.func.isRequired
};

export default Accordion;
