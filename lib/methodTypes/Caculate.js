export const sum = (arr) => {
  return arr.reduce((pre, cur) => {
      return pre + cur
  })
}
export const average = (arr) => {
  return this.sum(arr) / arr.length
}