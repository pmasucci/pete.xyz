import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className='project'>
        <div className='project-title'>{title}</div>
        <div className='project-description'>
          {description.map(point => (
            <p>{point}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
