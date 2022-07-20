import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql'
import { GetWordDetailInput } from '../../resolver/types'
import { getWordDetail } from '../../resolver'

const MeaningsListItemType = new GraphQLObjectType({
  name: 'MeaningsListItem',
  description: 'Word Meanings List Item.',
  fields: {
    type: {
      type: GraphQLString,
      description: 'The Word Type.',
    },
    meanings: {
      type: GraphQLString,
      description: 'The Word Type Meanings.',
    },
  },
})
const SentencesListItemType = new GraphQLObjectType({
  name: 'SentencesListItem',
  description: 'Word Sentences List Item.',
  fields: {
    sentence: {
      type: GraphQLString,
      description: 'The Word Sentence.',
    },
    translation: {
      type: GraphQLString,
      description: 'The Word Sentence Translation.',
    },
  },
})
const ExpressionsListItemType = new GraphQLObjectType({
  name: 'ExpressionsListItem',
  description: 'Word Expressions List Item.',
  fields: {
    expression: {
      type: GraphQLString,
      description: 'The Word Expression.',
    },
    translation: {
      type: GraphQLString,
      description: 'The Word Expression Translation.',
    },
    sentencesList: {
      type: new GraphQLList(SentencesListItemType),
      description: 'The Word Expression Sentences List.',
    },
  },
})

const WordDetailType = new GraphQLObjectType({
  name: 'WordDetail',
  description: 'Words List Item.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word ID.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word name.',
    },
    pronunciation: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word Pronunciation.',
    },
    language: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word Language.',
    },
    publishAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word Publish Time.',
    },
    meaningsList: {
      type: new GraphQLList(MeaningsListItemType),
      description: 'The Word Meanings List.',
    },
    expressionsList: {
      type: ExpressionsListItemType,
      description: 'The Word Expressions List.',
    },
    sentencesList: {
      type: new GraphQLList(SentencesListItemType),
      description: 'The Word Sentences List.',
    },
  },
})

// query argus
const WordDetailInput = new GraphQLInputObjectType({
  name: 'WordDetailInput',
  description: 'Get Word Detail Input.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word ID.',
    },
    language: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Word Language.',
    },
  },
})

export default {
  type: WordDetailType,
  description: "Get Specify Word's Detail Data.",
  args: {
    input: {
      type: new GraphQLNonNull(WordDetailInput),
      description: 'The Word ID.',
    },
  },
  resolve: (_: unknown, args: { input: GetWordDetailInput }) => {
    return getWordDetail(args.input)
  },
}

/*
query getWordDetail($input: WordDetailInput!) {
  wordDetail(input: $input) {
    id
    name
    language
    pronunciation
    publishAt
    meaningsList {
      type
      meanings
    }
    expressionsList {
      expression
      translation
      sentencesList {
        sentence
        translation
      }
    }
    sentencesList {
      sentence
      translation
    }
  }
}

{
  "input": {
    "id": "sentence+2022-07-18",
    "language": "en"
  }
}
*/
