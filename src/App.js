import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import classes from './App.css';

import Layout from './components/Layout/Layout';
import Partido from './containers/Partido';
class App extends Component {
  render() {
      return (
          <BrowserRouter>
            <div className={classes.App}>
                <Layout>
                    <Partido />
                </Layout>
                  </div>
          </BrowserRouter>
    );
  }
}

export default App;
