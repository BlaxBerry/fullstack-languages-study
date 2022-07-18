import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { createTestMessage } from '../../resolver'

const createTestMessageInputType = new GraphQLInputObjectType({
  name: 'CreateTestMessageInputType',
  fields: {
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Test Mesage.',
    },
  },
})

const TestReturnType = new GraphQLObjectType({
  name: 'TestReturnType',
  description: 'Test Return',
  fields: {
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Test Mesage.',
    },
  },
})

export default {
  type: TestReturnType,
  description: 'Create Test Message.',
  args: {
    input: {
      type: new GraphQLNonNull(createTestMessageInputType),
    },
  },
  resolve: (_: unknown, args: { input: { message: string } }) => {
    return createTestMessage(args.input)
  },
}

/*
mutation createTestMessage($input: CreateTestMessageInputType!) {
  createTestMessage(input: $input) {
    message
  }
}

{
  "input": {
    "message": "xxxxxxxxx"
  }
}
*/
