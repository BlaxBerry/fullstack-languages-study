import { GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
import { LanguageType } from '../../resolver/types'
import { getWordsList } from '../../resolver'

const WordsListItemType = new GraphQLObjectType({
  name: 'WordsListItem',
  description: 'Words List Item Type.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word ID.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word name.',
    },
  },
})

const WordListType = new GraphQLList(WordsListItemType)

export default {
  type: WordListType,
  description: 'Get List of Words of Specify Languag.',
  args: {
    language: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_: unknown, args: { language: LanguageType }) => {
    return getWordsList(args.language)
  },
}

/*
query getWordsList($language: String!) {
  wordsList(language: $language) {
    id
    name
  }
}

{
  "language": "ja"
}
*/
