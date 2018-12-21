import React, { Component } from 'react';
import { Page } from '../';

class About extends Component {
  render() {
    return (
      <>
        <div className='about'>
          <p>I'm a web app developer.</p>
          <p>
            My preferred tools are node and javascript, but I'm flexible. I've
            been working at a consulting firm for a variety of clients since
            2015 using agile processes and a range of tools and libraries.
          </p>
        </div>
      </>
    );
  }
}
export default Page(About);
