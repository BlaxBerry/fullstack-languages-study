import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'
import { PersonListType } from '../queries/getPersonList'
import createPerson, { CreatePersonProps } from '../../resolver/createPerson'

const InputType = new GraphQLInputObjectType({
  name: 'PersonCreateInputType',
  fields: {
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

export default {
  type: PersonListType,
  description: 'Create person to list.',
  args: {
    input: {
      type: new GraphQLNonNull(InputType),
    },
  },
  resolve: (_: unknown, args: { input: CreatePersonProps }) => {
    return createPerson(args.input)
  },
}

/*
mutation createPerson($input: PersonCreateInputType!) {
  createPerson(input: $input) {
    id
    name
    age
  }
}

{
  "input": {
    "name": "安",
    "age": 222
  }
}
*/
