/**
 * 字符串首字母大写
 * @param str 要修改的字符串
 * @returns 返回首字母大写的字符串
 */
const capitalizeString = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export { capitalizeString }
