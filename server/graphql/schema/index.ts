import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import queryTypeFileds from '../api/queries'
import mutaionsTypeFileds from '../api/mutations'

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
