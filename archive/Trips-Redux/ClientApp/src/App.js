import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import Trips from './components/Trip/Trips';
import {Create} from './components/Trip/Create';

import './custom.css'
import Form from 'reactstrap/lib/Form';
import { Update } from './components/Trip/Update';
import { Delete } from './components/Trip/Delete';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/create' component={Create}/>
        <Route path='/trips' component={Trips}/>
        <Route path="/update/:id" component = {Update}></Route>
        <Route path="/delete/:id" component = {Delete}></Route>
      </Layout>
    );
  }
}
