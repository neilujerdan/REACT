import React, { Component } from 'react';

import './App.css';

import Travel from './Travel';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">My travels</h1>
          </header>
          <Travel
              destination="Planvour"
              country="France - Bretagne"
              photo="https://www.ploemeur.com/wp-content/themes/ploemeur/thumb/timthumb.php?src=https://www.ploemeur.com/wp-content/uploads/2016/07/plage_fort-bloque-2-alex.jpg&w=800&h=500&zc=1" alt="Ploemeur"
          />
          <Travel
              destination="Hanoi"
              country="Vietnam"
              photo="https://www.travelsense.asia/wp-content/uploads/2017/07/hanoi-vietnam-halong-bay-4.jpg" alt="Hanoi"
          />
        </div>
    );
  }
}

export default App;