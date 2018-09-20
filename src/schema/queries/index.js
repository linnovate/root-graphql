import projects from './projects';
import tasks from './tasks';
import leads from './leads';
import bookings from './bookings';
import entities from './entities';
// export defaultObject.assign(projects);

module.exports = Object.assign(projects, tasks, leads, bookings, entities);