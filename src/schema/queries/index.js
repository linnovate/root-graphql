import projects from './projects';
import tasks from './tasks';
import leads from './leads';

// export defaultObject.assign(projects);

module.exports = Object.assign(projects, tasks, leads);