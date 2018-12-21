import React, { Component } from 'react';
import { Navigation } from '../';

function Page(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <>
          <Navigation />
          <div className='content'>
            <WrappedComponent />
          </div>
        </>
      );
    }
  };
}

export default Page;
