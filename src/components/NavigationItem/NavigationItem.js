import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavigationItem extends Component {
  componentDidMount() {
    console.log('mount');
  }
  render() {
    const { path, text } = this.props;
    return (
      <NavLink to={path} exact className='nav-item'>
        {text}
      </NavLink>
    );
  }
}

export default NavigationItem;
