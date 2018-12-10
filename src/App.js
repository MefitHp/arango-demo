import React, { Component } from 'react';
import Routes from './Routes'
import { Navbar } from './components/common/Navbar/Navbar'
import { Footer } from './components/common/Footer/Footer'
class App extends Component {
  render() {
    return (
      <div>            <Navbar />

          <div style={{paddingTop:"100px"}}>
              <Routes /></div>

        <Footer />
      </div>
    )
  }
}

export default App;
