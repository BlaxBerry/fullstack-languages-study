import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { CreateWordInput, WordsListItem, WordDetail } from '../types'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const getData = async (filePath: fs.PathOrFileDescriptor) => {
  const data = await readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

/**
 * 新增单词
 * 新增 WordDetail 详情同时追加 wordList
 * @param {CreateWordInpu} 追加的单词详情参数
 * @returns {Promise<WordDetail>}
 */
const createWord = async (input: CreateWordInput): Promise<WordDetail> => {
  // 判断是否存在同参数中 language 一致的文件夹 & 若不存在 language 同名文件夹时创建以及初始化所有文件的功能
  // 不在此处判断，功能移至 mutation createLanguage
  const { language } = input
  const filePath_wordDetail = path.join(__dirname, `../../../data/${language}/words_details.json`)
  const filePath_wordsList = path.join(__dirname, `../../../data/${language}/words_list.json`)

  // 1. 追加到 word_details
  const wordDetails = await getData(filePath_wordDetail).catch((err) => {
    console.log(err, '追加到 word_details')
  })
  const newWordDetail: WordDetail = {
    ...input,
    id: input.name + Number(new Date()), // TODO:
    publishAt: new Date(),
  }
  wordDetails.push(newWordDetail)
  writeFile(filePath_wordDetail, JSON.stringify(wordDetails))

  // 2. 追加到 words_list
  const wordsList = await getData(filePath_wordsList)
  const newWordListItem: WordsListItem = {
    id: input.name + Number(new Date()), // TODO:
    name: input.name,
  }
  wordsList.push(newWordListItem)
  writeFile(filePath_wordsList, JSON.stringify(wordsList))

  // 3. 返回新追加的 word 的详情
  return newWordDetail
}

export default createWord
