import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import typeFileds from '../query'

export default new GraphQLSchema({
  // queries
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'The root query type.',
    fields: {
      ...typeFileds,
    },
  }),
  // mutations
})
