import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
import { getTestMessage } from '../../resolver'

const TestMessageType = new GraphQLObjectType({
  name: 'TestMessageType',
  description: 'Get Test Message.',
  fields: {
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Test Message.',
    },
  },
})

export default {
  type: TestMessageType,
  description: 'Get Test Message.',
  resolve: getTestMessage,
}

/*
query {
  getTestMessage {
    message
  }
}
*/
