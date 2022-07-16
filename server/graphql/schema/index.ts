import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import queryTypeFileds from '../query'
import mutaionsTypeFileds from '../mutation'

export default new GraphQLSchema({
  // queries
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'The root query type.',
    fields: {
      ...queryTypeFileds,
    },
  }),
  // mutations
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: 'The root Mutation type.',
    fields: {
      ...mutaionsTypeFileds,
    },
  }),
})
