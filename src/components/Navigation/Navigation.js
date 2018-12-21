import React, { Component } from 'react';
import { NavigationItem, Name } from '../';

class Navigation extends Component {
  render() {
    return (
      <nav className='nav'>
        <Name />
        <NavigationItem text='About' path='/' />
        <NavigationItem text='Work' path='/work' />
        <NavigationItem text='fun' path='/fun' />
      </nav>
    );
  }
}

export default Navigation;
