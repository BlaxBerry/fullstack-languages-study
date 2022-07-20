import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { LanguageType, CreateWordInput, WordsListItem } from '../types'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

/**
 * 新增单词
 * @param {LanguageType} language 查找的单词所属的外语语言
 * @returns {Promise<WordCreateInput>} promise 单词详情
 */

const createWord = async (input: CreateWordInput): Promise<CreateWordInput> => {
  // TODO：1. 判断参数是否合法

  // 2. 追加数据
  //   const filePath = path.join(__dirname, `../../../data/${language}/words_list.json`)
  //   const wordsList = await readFile(filePath, 'utf-8')
  //   return wordsList ? JSON.parse(wordsList) : []
  return input
}

// const getDB = async () => {
//     const data = await readFile(DBPath, "utf-8");
//     return JSON.parse(data);
//   };

// const saveDB = async (data) => {
//     const newData = JSON.stringify(data);
//     await writeFile(DBPath, newData);
//   };

export default createWord
