import React, { Component } from 'react';
import classes from './App.css';

import Layout from './components/Layout/Layout';
import Partido from './containers/Partido/Partido';
class App extends Component {
  render() {
    return (
        <div className={classes.App}>
            <Layout>
                <Partido />
            </Layout>
      </div>
    );
  }
}

export default App;
