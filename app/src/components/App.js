import React, { Component } from 'react';
import { Drizzle, generateStore } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import drizzleOptions from '../drizzle';
import AppRouter from '../AppRouter/AppRouter';
// import Container from './Container';

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

class App extends Component {
  render() {
    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <AppRouter />
      </DrizzleContext.Provider>
    );
  }
}

export default App;
