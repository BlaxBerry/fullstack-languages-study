/**
 * 内容不会使用，仅开发时为了方便查看数据类型
 */

import { WordsListItem, WordsDetail } from '../types'

// word id: current date + word name + Base64

const WORDS_LIST: WordsListItem[] = [
  {
    id: 'sentence+2022-07-18',
    name: 'sentence',
  },
]

const WORD_DETAIL: WordsDetail[] = [
  {
    id: 'sentence+2022-07-18',
    name: 'sentence',
    pronunciation: '[ˈsentəns]',
    types: ['n.', 'vt.'],
    createAt: new Date('2022-07-18'),
    count: 0,
    meanList: {
      'n.': [
        {
          means: ['句子'],
          expressions: [],
          sentences: [
            {
              sentence: 'What does this sentence mean?',
              transltion: '这个句子是什么意思？',
            },
            {
              sentence: 'Put a word in each blank to complete the sentence. ',
              transltion: '每个空格填上一个单词，把句子补充完整。',
            },
          ],
        },
        {
          means: ['判决', '宣判', '判刑'],
          expressions: [],
          sentences: [],
        },
      ],
      'vt.': [
        {
          means: ['判决', '宣判', '判刑'],
          expressions: [],
          sentences: [],
        },
      ],
    },
  },
]
