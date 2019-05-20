import React from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ item, current_item, index, onItemSelect, current_tab, onTabSelect }) => {
  function getAccordionCSSClass(item, current_item) {
    return item === current_item ? "custom-show" : "custom-hide-2"
  }

  function getHeaderCSS(item) {
    let header_style;
    const base = "card-header custom-hover"
    if (item.tabs[0].data == "Answer") {
      header_style = `${base}`;
    }
    else if (item.tabs[0].data == "Anki") {
      header_style = `${base} bg-primary`;
    }
    else {
      header_style =  `${base} bg-success`;
    }
    return header_style;
  }
  return (
    <div>
      <div className={getHeaderCSS(item)} onClick={() => onItemSelect(item)}>
        <span className="font-weight-bold">{`${index+1}. ${item.name}`}</span>
      </div>
        <div className={getAccordionCSSClass(item, current_item)}>
          <div className="card-body">
            <ul className="nav nav-tabs">
              {item.tabs.length > 1 && item.tabs.map((tab, index) => (
                <li key={index} className="nav-item" onClick={() => onTabSelect(index)}>
                  <div className={current_tab === index ?
                    "custom-pointer nav-link active" :
                    "custom-pointer nav-link"}>
                    {tab.name}
                  </div>
                </li>
              ))}
            </ul>
            {item.tabs.map((tab, index) => (
              <div key={index} className="tab-content">
                <div className={current_tab === index ? "tab-pane show active" : "tab-pane"}>
                  {!!tab.image_src &&
                    <>
                      <img src={tab.image_src} className="card-img-top"/>
                      <a href={tab.image_src}>Image Source</a>
                    </>
                  }
                  <pre className="line-numbers" data-src="prism-line-numbers.js">
                    <code className="language-js">{tab.data}</code>
                  </pre>
                </div>
              </div>
            ))}
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
