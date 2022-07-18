import { GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
import { LanguageType } from '../../../types'
import { getWordsList } from '../../resolver'

const WordsListItemType = new GraphQLObjectType({
  name: 'WordsListItemType',
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
  description: 'Get list of Words data.',
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
  getWordsList(language: $language) {
    id
    name
  }
}

{
  "language": "ja"
}
*/
