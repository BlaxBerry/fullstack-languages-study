import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { WordDetail, GetWordDetailInput } from '../types'

const readFile = promisify(fs.readFile)

/**
 * 查询单词详情
 * @param {GetWordDetailInput} input 查询单词详情的参数
 * @returns {Promise<WordDetail>} promise 单词详情
 */
const getWordDetail = async ({ id, language }: GetWordDetailInput): Promise<WordDetail> => {
  // TODO：1. 判断参数是否合法

  // 2. 获取数据
  const filePath = path.join(__dirname, `../../../data/${language}/words_details.json`)
  const wordDetailsList = await readFile(filePath, 'utf-8')
  const wordDetail = JSON.parse(wordDetailsList).find((item: WordDetail) => item.id === id)
  return wordDetail
}

export default getWordDetail
