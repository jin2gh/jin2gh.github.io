const shuffle = dataList => {
  for (let i = dataList.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    // eslint-disable-next-line semi-style
    ;[dataList[i], dataList[j]] = [dataList[j], dataList[i]]
  }
  return dataList
}

export default shuffle
