// import { GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
// import { LanguageType } from '../../resolver/types'
// import { getWordsList } from '../../resolver'

// const CommonFields = {
//   name: {
//     type: new GraphQLNonNull(GraphQLString),
//     description: 'The Word name.',
//   },
//   pronunciation: {
//     type: new GraphQLNonNull(GraphQLString),
//     description: 'The Word name.',
//   },
//   language: {
//     type: new GraphQLNonNull(GraphQLString),
//     description: 'The Word name.',
//   },
// }

// const WordDetailType = new GraphQLObjectType({
//   name: 'WordDetailType',
//   description: 'Word Detail Type.',
//   fields: {
//     id: {
//       type: new GraphQLNonNull(GraphQLString),
//       description: 'The Word ID.',
//     },
//     ...CommonFields,
//   },
// })

// const CreateWordInputType = new GraphQLObjectType({
//   name: 'CreateWordInputType',
//   description: 'Create Word Input Type.',
//   fields: CommonFields,
// })

// export default {
//   type: WordDetailType,
//   description: 'Get Detail of Word.',
//   args: {
//     input: {
//       type: CreateWordInputType,
//     },
//   },
//   resolve: (_: unknown, args: { language: LanguageType }) => {
//     return getWordsList(args.language)
//   },
// }

// /*
// query getWordsList($language: String!) {
//   wordsList(language: $language) {
//     id
//     name
//   }
// }

// {
//   "language": "ja"
// }
// */
