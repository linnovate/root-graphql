module.exports = [{
  entity: 'Reservation',
  subEntities: [{
    name: 'Link',
    fields: [{
      name: 'firstName'
    }, {
      name: 'lastName'
    }],
    events: [{
      name: 'RSRV_NEW',
      description: 'Create new reservation'
    }]
  }, {
    name: 'Club',
    fields: [{
      name: 'firstName'
    }, {
      name: 'lastName'
    }],
    events: [{
      name: 'RSRV_NEW',
      description: 'Create new reservation'
    }]   
  }],
  actions: [{
    type: 'pushNotification',
    description: 'send push notification'
  }]
}, {
  entity: 'Hotel',
  subEntities: [{
    name: 'Link',
    fields: [{
      name: 'firstName'
    }, {
      name: 'lastName'
    }],
    events: [{
      name: 'RSRV_NEW',
      description: 'Create new reservation'
    }]
  }, {
    name: 'Club',
    fields: [{
      name: 'firstName'
    }, {
      name: 'lastName'
    }],
    events: [{
      name: 'RSRV_NEW',
      description: 'Create new reservation'
    }]   
  }],
  actions: [{
    type: 'pushNotification',
    description: 'send push notification'
  }] 
}]