import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import { createWord } from '../../resolver/mutations'
import { CreateWordInput } from '../../resolver/types'
import { WordDetailType } from '../queries/getWordDetail'

const CreateWrodInputMeaningsListItemType = new GraphQLInputObjectType({
  name: 'InputMeaningsListItem',
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
const CreateWrodInputSentencesListItemType = new GraphQLInputObjectType({
  name: 'InputSentencesListItem',
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
const CreateWrodInputExpressionsListItemType = new GraphQLInputObjectType({
  name: 'InputExpressionsListItem',
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
      type: new GraphQLList(CreateWrodInputSentencesListItemType),
      description: 'The Word Expression Sentences List.',
    },
  },
})

// mutaion args
const CreateWordInputType = new GraphQLInputObjectType({
  name: 'CreateWordInput',
  fields: {
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
    area: {
      type: new GraphQLList(GraphQLString),
      description: 'The Word Area.',
    },
    meaningsList: {
      type: new GraphQLList(CreateWrodInputMeaningsListItemType),
      description: 'The Word Meanings List.',
    },
    expressionsList: {
      type: new GraphQLList(CreateWrodInputExpressionsListItemType),
      description: 'The Word Expressions List.',
    },
    sentencesList: {
      type: new GraphQLList(CreateWrodInputSentencesListItemType),
      description: 'The Word Sentences List.',
    },
  },
})
export default {
  type: WordDetailType,
  description: 'Create Word to List.',
  args: {
    input: {
      type: new GraphQLNonNull(CreateWordInputType),
    },
  },
  resolve: (_: unknown, args: { input: CreateWordInput }) => {
    return createWord(args.input)
  },
}

/*
mutation createWord($input: CreateWordInput!) {
  createWord(input: $input) {
    id
    name
    pronunciation
    publishAt
    area
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
		"name": "xxx",
    "pronunciation": "[xxx]",
    "language": "en",
    "area": ["x","xx"],
    "meaningsList": [
      {
        "type": "n.",
        "meanings": "xxx"
      }
    ],
    "expressionsList": [
      {
        "expression": "asc",
        "translation": "ASC",
        "sentencesList": [
          {
            "sentence": "xaxx",
            "translation": "xAxx"
          }
        ]
      }
    ],
    "sentencesList": [
      {
        "sentence": "ascasc",
        "translation": "adsfdgsdg"
      }
    ]
  }
}
*/
