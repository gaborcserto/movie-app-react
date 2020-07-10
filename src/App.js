import React, {Fragment} from 'react';
import Header from './components/Header/Header';
import HomePage from './containers/HomePage/HomePage';
import './App.module.scss';

class App extends React.Component {
  render() {
    return (
        <Fragment>
            <Header />
            <HomePage />
        </Fragment>
    )
  }
}

export default App
