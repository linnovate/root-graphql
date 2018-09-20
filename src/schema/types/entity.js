import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';

const ActionType = new GraphQLObjectType({
  name: 'Action',
  fields: () => ({
    type: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  })
});

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  })
});

const FieldType = new GraphQLObjectType({
  name: 'Field',
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
});

const SubEntityType = new GraphQLObjectType({
  name: 'SubEntity',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    fields: {
      type: new GraphQLList(FieldType)
    },
    events: {
      type: new GraphQLList(EventType)
    }
  })
});

module.exports = new GraphQLObjectType({
  name: 'Entity',
  fields: () => ({
    entity: {
      type: GraphQLString
    },
    subEntities: {
      type: new GraphQLList(SubEntityType)
    },
    actions: {
      type: new GraphQLList(ActionType)
    }
  })
});
