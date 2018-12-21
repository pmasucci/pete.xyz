import React, { Component } from 'react';
import { Page, Project } from '../';
import { projects } from '../../data/work';

class Work extends Component {
  render() {
    return (
      <div className='work'>
        <div className='work-intro'>
          <p>
            Because of the nature of my work, I'm not able to be super specific
            about clients I've worked for. If you'd like to know more, feel free
            to reach out and I can provide some examples or samples of the work
            I've done.
          </p>
        </div>
        <div className='project-list'>
          {projects.map(project => (
            <Project title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    );
  }
}
export default Page(Work);
