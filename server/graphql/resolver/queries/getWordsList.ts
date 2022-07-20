import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { LanguageType, WordsListItem } from '../types'

const readFile = promisify(fs.readFile)

/**
 * 查找单词列表
 * @param {LanguageType} language 查找的单词所属的外语语言
 * @returns {Promise<WordsListItem[]>} promise 单词列表
 */

const getWordsList = async (language: LanguageType = 'en'): Promise<WordsListItem[]> => {
  // TODO：1. 判断参数 languages 是否合法

  // 2. 获取数据
  const filePath = path.join(__dirname, `../../../data/${language}/words_list.json`)
  const wordsList = await readFile(filePath, 'utf-8')
  return wordsList ? JSON.parse(wordsList) : []
}

export default getWordsList
