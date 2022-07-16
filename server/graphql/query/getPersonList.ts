import { GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql'
import { getPersonList } from '../resolver'

const PersonType = new GraphQLObjectType({
  name: 'PersonType',
  description: 'person',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Person ID.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Person name.',
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Person age.',
    },
  },
})

const PersonListType = new GraphQLList(PersonType)

export default {
  type: PersonListType,
  description: 'Get list of Person data.',
  resolve: getPersonList,
}

/*
query {
  getPersonList {
    id
    name
    age
  }
}
*/
