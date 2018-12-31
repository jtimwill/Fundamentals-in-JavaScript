import React, { Component } from 'react';
import logo from './logo.svg';
import algorithms from './utilities/algorithms';

class App extends Component {
  render() {
    const accordionStyle = { width: "800px" };
    const mainStyle = { paddingBottom: "350px" };
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              <img src="logo.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
              Fundamentals
            </a>
          </nav>
        </header>
        <main className="bg-secondary" style={mainStyle}>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Fluid jumbotron</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="flex-shrink-1">
            </div>
            <div className="accordion" id="accordionExample" style={accordionStyle}>
              <h3 className="text-light">Algorithms</h3>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      MergeSort
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Psuedocode</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">JavaScript</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <pre className="line-numbers mb-3" data-src="prism-line-numbers.js"><code className="language-js">{algorithms.pseudocode}</code></pre>
                      </div>
                      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><pre className="line-numbers mb-3" data-src="prism-line-numbers.js"><code className="language-js">{algorithms.js_code}</code></pre></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
              </div>
            </div>
            <div className="flex-shrink-1">
            </div>
          </div>
        </main>
        <footer>
          <nav className="navbar fixed-bottom navbar-light bg-light">
            <a className="navbar-brand" href="#">Fixed bottom</a>
          </nav>
        </footer>
      </div>
    );
  }
}

export default App;
