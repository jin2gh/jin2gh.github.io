const shuffle = dataList => {
  for (let i = dataList.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = dataList[i]
    dataList[i] = dataList[j]
    dataList[j] = tmp
  }
  return dataList
}

export default shuffle
