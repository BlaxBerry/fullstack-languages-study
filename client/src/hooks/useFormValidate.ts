export default function useFormValidate() {
  /* 
   Custom Validators
   主要用于 Antdesign Form 表单的 rules 属性中
   throw 抛出的错误会自动被当作 field 下的错误信息
  */

  // 判断表单输入内容是否为空白
  const isBlacnk = (value: string) => {
    if (value?.trim() === '') throw new Error('不能输入空白内容')
    else return Promise.resolve()
  }

  return {
    isBlacnk,
  }
}
